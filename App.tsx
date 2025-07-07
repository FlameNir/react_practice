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
import { RadioButton } from 'react-native-paper';

import { ReviewModal } from './src/components/ReviewModal';
//import { DeviceInfo } from 'react-native/types_generated/index';
const screenWidth = Dimensions.get('window').width;
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
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [histogramData, setHistogramData] = useState<number[]>([0, 0, 0, 0, 0]);
  const [sortOption, setSortOption] = useState<'user' | 'score'>('user');

  // const today = new Date().toLocaleDateString('ru-RU', {
  //   day: '2-digit',
  //   month: 'long',
  // });
  const textOnThePage = {
    review: 'Оставьте отзыв',
    rewritereview: 'Изменить отзыв',
    sorttext1: 'По умолчанию',
    sorttext2: 'По рейтингу',
  };
  //Функция для получения данных для Flatlist
  const getSortedData = () => {
    if (sortOption === 'score') {
      return [...filteredData].sort((a, b) => b.score - a.score);
    }
    return [...filteredData].sort((a, b) => a.user - b.user);
  };
  //Основная функция, полчения данных
  const fetchData = () => {
    fetch('https://gboinform.ru/score.php') //Возврат Promise
      .then(response => response.json()) //работа с Promise
      .then(data => {
        const filtered = data.filter((item: any) => item.agnks === 449035);
        setFilteredData(filtered);

        const scores = filtered.map((item: any) => parseFloat(item.score));
        const sum = scores.reduce((a, b) => a + b, 0) / scores.length;
        setRating(parseFloat(sum.toFixed(1)));

        // Количество отзывов + гистошр
        setReviewCount(filtered.length);
        const histogram = [0, 0, 0, 0, 0];
        scores.forEach(score => {
          const idx = score - 1;

          if (idx >= 0 && idx <= 4) histogram[idx]++;
        });
        setHistogramData(histogram.reverse());
        const currentUser = filtered.find((item: any) => item.user === 38);
        if (currentUser) {
          setUser(currentUser.user);
          setSelectedRating(currentUser.score);
          setName(currentUser.name);
          setComment(currentUser.comm ?? '');
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const SendData = async () => {
    //const id = 33
    setUser(38); // - Это ID куда я оставляю свой комент
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
          data={getSortedData()}
          keyExtractor={item => item.user.toString()}
          ListHeaderComponent={
            <>
              {/* 
              -------------------------------------------------------------------------------
              Средний рейтинг, число отзывов и гистогррамма
              -------------------------------------------------------------------------------*/}
              <View style={styles.topRow}>
                <View style={styles.ratingBox}>
                  <Text style={styles.avgRating}>{rating}</Text>
                  <Text style={styles.smallText}>{reviewCount} отзывов</Text>
                </View>
                <View style={styles.histogramBox}>
                  {histogramData.map((count, index) => (
                    <View key={index} style={styles.histogramRow}>
                      <Text style={styles.histogramCount}>{5 - index}</Text>
                      <View style={styles.histogramLayer}>
                        <View style={styles.histogramBackgroundBar} />
                        <View
                          style={[
                            styles.histogramBar,
                            {
                              width: (count / reviewCount) * screenWidth * 0.4,
                            },
                          ]}
                        />
                      </View>
                    </View>
                  ))}
                </View>
              </View>
              {/* 
              -------------------------------------------------------------------------------
              Кнопка отзыва
              -------------------------------------------------------------------------------*/}

              <TouchableOpacity
                style={styles.leaveReviewButton}
                onPress={() => {
                  setModalVisible(true);
                }}
              >
                <Text style={styles.leaveReviewText}>
                  {selectedRating
                    ? textOnThePage.rewritereview
                    : textOnThePage.review}
                </Text>
              </TouchableOpacity>
              {/* 
              -------------------------------------------------------------------------------
              Кнопки сортировки отзывов
              -------------------------------------------------------------------------------*/}
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{ marginRight: 20 }}
                  onPress={() => setSortOption('user')}
                >
                  <Text
                    style={{
                      fontWeight: sortOption === 'user' ? 'bold' : 'normal',
                    }}
                  >
                    {textOnThePage.sorttext1}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setSortOption('score')}>
                  <Text
                    style={{
                      fontWeight: sortOption === 'score' ? 'bold' : 'normal',
                    }}
                  >
                    {textOnThePage.sorttext2}
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          }
          // -------------------------------------------------------------------------------
          //Вывод отзывов
          // -------------------------------------------------------------------------------

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
              {item.comm && item.comm.trim() !== '' && (
                <Text style={styles.reviewText}>{item.comm}</Text>
              )}
            </View>
          )}
          contentContainerStyle={styles.container}
        />
        {/* 
        -------------------------------------------------------------------------------
        Модалка
        -------------------------------------------------------------------------------*/}
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
