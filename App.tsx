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
  const [rating, setRating] = useState<number | null>(null); //средний рейтинг
  const [user, setUser] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Review[]>([]);
  // const today = new Date().toLocaleDateString('ru-RU', {
  //   day: '2-digit',
  //   month: 'long',
  // });
  const textOnThePage = {
    review: 'Оставьте отзыв',
  };
  //-----------------------------------------------------------------------------
  // type Review = {
  //   user: string;
  //   name: string;
  //   score: number;
  //   comment: string;
  // };
  // const reviews: Review[] = [
  //   { user: '1', name: 'Аня', score: 5, comment: 'Всё супер!' },
  //   { user: '2', name: 'Иван', score: 1, comment: 'Быстро приехали!' },
  //   { user: '3', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
  //   { user: '4', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
  //   { user: '5', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
  //   { user: '6', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
  //   { user: '7', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
  //   { user: '8', name: 'Иван', score: 5, comment: 'Быстро приехали!' },
  // ];

  //-----------------------------------------------------------------------------

  const consoleLoging = (value: any) => {
    console.log('Вывод логов: ');
    console.log(value);
  };
  const fetchData = () => {
    fetch('https://gboinform.ru/score.php') //Возврат Promise
      .then(response => response.json()) //работа с Promise
      .then(data => {
        const filtered = data.filter((item: any) => item.agnks === 449035);
        setFilteredData(filtered);

        const scores = filtered.map((item: any) => parseFloat(item.score));
        const sum = scores.reduce((a, b) => a + b, 0) / scores.length;
        setRating(parseFloat(sum.toFixed(1)));

        const user = filtered.find((item: any) => item.user === 39);
        if (user) {
          setSelectedRating(user.score);
          setName(user.name);
          setComment(user.comm ?? '');
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const SendData = async () => {
    //const id = 33
    const user = 39; // - Это ID куда я оставляю свой комент
    const agnks = 449035; // ---?????
    const response = await fetch('https://gboinform.ru/set_score.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //body: `id=${user}&user=${user}&agnks=${agnks}&score=${score}`,
      body: JSON.stringify({
        user: user,
        name: name,
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
        <FlatList
          data={filteredData}
          keyExtractor={item => item.user.toString()}
          ListHeaderComponent={
            <>
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
                <Text style={styles.leaveReviewText}>
                  {textOnThePage.review}
                </Text>
              </TouchableOpacity>
            </>
          }
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
              <Text style={styles.reviewText}>{item.comm}</Text>
            </View>
          )}
          contentContainerStyle={styles.container}
        />
        <ReviewModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          user={user}
          setUser={setUser}
          name={name}
          setName={setName}
          comment={comment}
          setComment={setComment}
          rating={selectedRating}
          setRating={setSelectedRating}
          sendData={SendData}
          fetchData={fetchData}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
