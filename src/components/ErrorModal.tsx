import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';

type ErrorModalProps = {
  visible: boolean;
  onClose: () => void;
  errorText: string;
};

export const ErrorModal = ({
  visible,
  onClose,
  errorText,
}: ErrorModalProps) => {
  const ERROR_MESSAGES: { [key: string]: string } = {
    USER_EXISTS: 'Пользователь с таким логином уже существует.',
    EMAIL_EXISTS: 'Этот email уже зарегистрирован.',
    INVALID_PASSWORD: 'Пароль слишком короткий или некорректный.',
    NETWORK_ERROR: 'Проблема с подключением к серверу.',
    UNKNOWN: 'Произошла неизвестная ошибка. Попробуйте снова.',
  };

  const getErrorMessage = (errorCode: string): string => {
    return ERROR_MESSAGES[errorCode] || ERROR_MESSAGES.UNKNOWN;
  };
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.errorText}>{errorText}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeText}>{getErrorMessage(errorText)}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  errorText: {
    color: Colors.error,
    fontSize: 16,
    marginBottom: 16,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: Colors.error,
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
