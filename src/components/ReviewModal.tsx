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
  user,
  setUser,
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
  const [inputHeight, setInputHeight] = useState(100); // начальная высота

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
            style={[
              styles.commentInput,
              { height: Math.max(100, inputHeight) },
            ]}
            multiline
            maxLength={500}
            onContentSizeChange={event =>
              setInputHeight(event.nativeEvent.contentSize.height + 10)
            }
          />
          <Text
            style={{
              alignSelf: 'flex-end',
              marginBottom: 10,
              color:
                comment.length > 450
                  ? 'red'
                  : comment.length > 400
                  ? 'orange'
                  : '#666',
            }}
          >
            {comment.length} / 500
          </Text>

          <TouchableOpacity
            style={styles.modalButton}
            onPress={async () => {
              //Проверка на имя, но имена пока статик
              // if (!name.trim()) {
              //   setName('');
              //   setNameError(true);
              //   return;
              // }
              await sendData();
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
