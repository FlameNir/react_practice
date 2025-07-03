import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  Dimensions,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import { styles } from './src/styles/styles.ts'; // путь подстрой под себя

const App = () => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('Оставить отзыв');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const today = new Date().toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: 'long',
  });
  const consoleLoging = (value: any) => {
    console.log('Вывод логов: ');
    console.log(value);
  };
  const fetchData = () => {
    fetch('https://gboinform.ru/score.php') //Возврат Promise
      .then(response => response.json()) //работа с Promise
      .then(data => {
        console.log('Отладка, вывод в консоль сырой data');
        console.log(data);
        const filtered = data.filter((item: any) => item.agnks === 449035);
        // console.log('Отладка, вывод в консоль filtered');
        // console.log(filtered);
        const scores = filtered.map((item: any) => parseFloat(item.score));
        console.log('Scores');
        console.log(scores);
        const sum = scores.reduce((a, b) => a + b, 0) / scores.length;
        console.log('sum');
        console.log(parseFloat(sum.toFixed(1)));
        setRating(parseFloat(sum.toFixed(1)));
        const user = data.find((item: any) => item.user === 33);
        console.log('user по фильтру');
        console.log(user.score);
        if (user) {
          if (user.comm && user.comm.trim() !== '') {
            setComment(user.comm);
          } else {
            setComment('');
          }
          setSelectedRating(user.score);
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
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.ratingRow}>
          <Text style={styles.label}>Рейтинг приложения: </Text>
          <Text style={styles.value}>{rating}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>{feedback}</Text>
        </TouchableOpacity>
        <Modal visible={modalVisible}>
          <View style={styles.container}>
            <View style={styles.boxModal}>
              <View style={styles.starsRow}>
                {[1, 2, 3, 4, 5].map(star => (
                  <TouchableOpacity
                    key={star}
                    onPress={() => setSelectedRating(star)}
                  >
                    <Text
                      style={
                        star <= selectedRating
                          ? styles.starSelected
                          : styles.star
                      }
                    >
                      {star <= selectedRating ? '★' : '☆'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <TextInput
                style={styles.textInput}
                placeholder="Поделитесь впечатлениями (необязательно)"
                placeholderTextColor="#999"
                multiline
                numberOfLines={4}
                value={comment}
                onChangeText={setComment}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={async () => {
                  await SendData();
                  consoleLoging(comment);
                  fetchData();
                  setModalVisible(false);
                  consoleLoging(comment);
                }}
              >
                <Text style={styles.buttonText}>Оставить отзыв</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default App;
