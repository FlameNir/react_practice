import React, { useState } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/styles.ts';

type ReviewModalProps = {
  visible: boolean;
  onClose: () => void;
  user: number;
  setUser: (value: number) => void;
  name: string;
  setName: (text: string) => void;
  comment: string;
  setComment: (text: string) => void;
  rating: number;
  setRating: (value: number) => void;
  sendData: () => void;
  fetchData: () => void;

  //   visible={modalVisible}
  // onClose={() => setModalVisible(false)}
  // name={name}
  // setName={setName}
  // user={user}
  // setUser={setUser}
  // comment={comment}
  // setComment={setComment}
  // rating={selectedRating}
  // setRating={setSelectedRating}
  // sendData={SendData}
  // fetchData={fetchData}
};
const TEXT = {
  writenameerr: 'Введите имя',
  writename: 'Имя',
  newrewiew: 'Новый отзыв',
  rewiewtext: 'Поделитесь впечатлениями (необязательно)',
  sendrewiew: 'Отправить отзыв',
};
export const ReviewModal = ({
  visible,
  onClose,
  name,
  setName,
  comment,
  setComment,
  rating,
  setRating,
  sendData,
  fetchData,
}: ReviewModalProps) => {
  const [nameError, setNameError] = useState(false);

  return (
    <Modal visible={visible} animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.modalBox}>
          <Text style={styles.modalTitle}>{TEXT.newrewiew}</Text>
          {/* -------------------------------------------------------------------------
           Если не ввел имя, то выводит ошибку */}
          <TextInput
            placeholder={nameError ? TEXT.writenameerr : TEXT.writename}
            placeholderTextColor={nameError ? 'red' : '#999'}
            value={name}
            onChangeText={text => {
              setName(text);
              if (text.trim()) setNameError(false); // убрать ошибку при вводе
            }}
            style={[
              styles.nameInput,
              nameError && { borderColor: 'red' }, // красная рамка при ошибке
            ]}
          />
          {/* ------------------------------------------------------------------------- 
          Вывод звезд, подкачиваем */}
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map(star => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Text
                  style={
                    star <= rating ? styles.starSelected : styles.starUnSelected
                  }
                >
                  {star <= rating ? '★' : '☆'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            placeholder={TEXT.rewiewtext}
            value={comment}
            onChangeText={setComment}
            style={styles.commentInput}
            multiline
          />
          <TouchableOpacity
            style={styles.modalButton}
            onPress={() => {
              if (!name.trim()) {
                setName('');
                setNameError(true);
                return;
              }
              sendData();
              onClose();
              fetchData();
            }}
          >
            <Text style={styles.modalButtonText}>{TEXT.sendrewiew}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
