import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
  Dimensions,
  Alert,
  Modal,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import { styles } from './src/styles/styles.ts';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ReviewModal } from './src/components/ReviewModal'; // путь подстрой под себя
//import { DeviceInfo } from 'react-native/types_generated/index';
type Review = {
  score: number;
  user: number;
  agnks: number;
  comm: string | null;
  name: string;
};
const App = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('Оставить отзыв');
  const [name, setName] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Review[]>([]);
  const today = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
  });
  const textOnThePage = {
    review: 'Оставьте отзыв',
  };
  //-----------------------------------------------------------------------------
  type Review = {
    id: string;
    name: string;
    score: number;
    comment: string;
  };
  const reviews: Review[] = [
    { id: '1', name: 'Аня', score: 5, comment: 'Всё супер!' },
    { id: '2', name: 'Иван', score: 1, comment: 'Быстро приехали!' },
    { id: '3', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
    { id: '4', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
    { id: '5', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
    { id: '6', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
    { id: '7', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
    { id: '8', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
  ];

  //-----------------------------------------------------------------------------

  const consoleLoging = (value: any) => {
    console.log('Вывод логов: ');
    console.log(value);
  };
  const fetchData = () => {
    fetch('https://gboinform.ru/score.php') //Возврат Promise
      .then(response => response.json()) //работа с Promise
      .then(data => {
        setFilteredData(data.filter((item: any) => item.agnks === 449035));
        const scores = filtered.map((item: any) => parseFloat(item.score));
        const sum = scores.reduce((a, b) => a + b, 0) / scores.length;
        setRating(parseFloat(sum.toFixed(1)));
        const user = data.find((item: any) => item.user === 33);
        if (user) {
          if (user.comm && user.comm.trim() !== '') {
            setComment(user.comm);
          } else {
            setComment('');
          }
          setSelectedRating(user.score);
          setName(user.name);
          // const out =
          //   'Ваш рейтинг ' +
          //   setFeedback('Ваш рейтинг ' + parseFloat(user.score));
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const SendData = async () => {
    //const id = 33
    const user = 33;
    const agnks = 449035;
    const response = await fetch('https://gboinform.ru/set_score.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: `id=${user}&user=${user}&agnks=${agnks}&score=${score}`,
      body: JSON.stringify({
        user: user,
        agnks: agnks,
        score: selectedRating,
        comm: comment,
      }),
    });

    const answerServer = await response.text();
    console.log('Ответ от сервера:', answerServer);
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.container}>
          {' '}
          <View style={styles.topRow}>
            <View style={styles.ratingBox}>
              <Text style={styles.avgRating}>{rating}</Text>
              <Text style={styles.smallText}>Тут будет кол-во отзывов</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.leaveReviewButton}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.leaveReviewText}>{textOnThePage.review}</Text>
          </TouchableOpacity>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.reviewItem}>
                <Text style={styles.reviewName}>{item.name}</Text>
                <View style={styles.reviewStar}>
                  {[1, 2, 3, 4, 5].map(star => (
                    <Text
                      key={star}
                      style={
                        star <= item.score
                          ? styles.reviewStarSelected
                          : styles.reviewStarUnSelected
                      }
                    >
                      {star <= item.score ? '★' : '☆'}
                    </Text>
                  ))}
                </View>
                <Text style={styles.reviewText}>{item.comment}</Text>
              </View>
            )}

            // contentContainerStyle={{ paddingBottom: 100 }}
          />
          <ReviewModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
            name={name}
            setName={setName}
            comment={comment}
            setComment={setComment}
            rating={selectedRating}
            setRating={setSelectedRating}
            sendData={SendData}
            fetchData={fetchData}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
