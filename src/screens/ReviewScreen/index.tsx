import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  Modal,
  Image,
} from 'react-native';
import { styles } from './styles';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';
//import SortIcon from './assets/images/sort.svg';
import { ReviewModal } from '@components/ReviewModal';
//import { DeviceInfo } from 'react-native/types_generated/index';
import { useFocusEffect } from '@react-navigation/native';
import { SortModal } from '@components/SortModal';

const screenWidth = Dimensions.get('window').width;
type Review = {
  score: number;
  user: number;
  agnks: number;
  comm: string | null;
  name: string;
  date: string;
};
const ReviewsScreen = () => {
  const [rating, setRating] = useState<number | null>(null); //средний рейтинг
  const [user, setUser] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Review[]>([]);
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [histogramData, setHistogramData] = useState<number[]>([0, 0, 0, 0, 0]);
  const [sortOption, setSortOption] = useState<
    'user' | 'scoredown' | 'data' | 'scoreup'
  >('user');
  const [visibleSortMenu, setVisibleSortMenu] = useState(false);
  const [date, setDate] = useState<Date | null>(null);

  const textOnThePage = {
    review: 'Оставьте отзыв',
    rewritereview: 'Изменить отзыв',
    sorttext1: 'По умолчанию',
    sorttext2: 'По рейтингу',
    sorttext3: 'По дате',
  };
  //Функция для получения данных для Flatlist
  const getSortedData = () => {
    if (sortOption === 'scoredown') {
      return [...filteredData].sort((a, b) => b.score - a.score);
    }
    if (sortOption === 'scoreup') {
      return [...filteredData].sort((a, b) => a.score - b.score);
    }
    if (sortOption === 'data') {
      return [...filteredData].sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA; // по убыванию, новые выше
      });
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
        const sum =
          scores.reduce((a: number, b: number) => a + b, 0) / scores.length;
        setRating(parseFloat(sum.toFixed(1)));

        // Количество отзывов + гистошр
        setReviewCount(filtered.length);
        const histogram = [0, 0, 0, 0, 0];
        scores.forEach((score: number) => {
          const idx = score - 1;

          if (idx >= 0 && idx <= 4) histogram[idx]++;
        });
        console.log(filtered);
        setHistogramData(histogram.reverse());
        const currentUser = filtered.find((item: any) => item.user === 37);
        if (currentUser) {
          setUser(currentUser.user);
          setDate(currentUser.date);
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
    setUser(37); // - Это ID куда я оставляю свой комент
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
        date: date,
      }),
    });

    const answerServer = await response.text();
    console.log('Ответ от сервера:', answerServer);
  };
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, []),
  );
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
              <View style={{ alignItems: 'flex-end' }}>
                <TouchableOpacity
                  style={{ padding: 4, flexDirection: 'row' }}
                  onPress={() => setVisibleSortMenu(true)}
                >
                  <Text>
                    {/* {sortOption === 'user' && 'Сортировка по рейтингу '}
                    {sortOption === 'score' && 'Сортировка по оценке '}
                    {sortOption === 'data' && 'Сортировка по дате '} */}
                  </Text>

                  <Image
                    source={require('@images/icons8-sort-50.png')} // укажи свой путь
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
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

              <View style={{ flexDirection: 'row' }}>
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
                <View style={{ justifyContent: 'center' }}>
                  <Text style={styles.reviewData}>{item.date}</Text>
                </View>
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
        Модалки
        -------------------------------------------------------------------------------*/}
        <SortModal
          visible={visibleSortMenu}
          sortOption={sortOption}
          setSortOption={setSortOption}
          onClose={() => setVisibleSortMenu(false)}
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

export default ReviewsScreen;
