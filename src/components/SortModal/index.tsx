import React from 'react';
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { styles } from './styles';

type Props = {
  visible: boolean;
  sortOption: 'user' | 'scoredown' | 'data' | 'scoreup';
  setSortOption: (option: Props['sortOption']) => void;
  onClose: () => void;
};

export const SortModal: React.FC<Props> = ({
  visible,
  sortOption,
  setSortOption,
  onClose,
}) => {
  const applyAndClose = () => {
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay} />
      </TouchableWithoutFeedback>

      <View style={styles.modalBottomSheet}>
        <Text style={styles.modalTitle1}>Сортировать по</Text>

        <RadioButton.Group
          onValueChange={value => setSortOption(value as Props['sortOption'])}
          value={sortOption}
        >
          <RadioButton.Item label="Умолчанию" value="user" />
          <RadioButton.Item label="Сначала новые" value="data" />
          <RadioButton.Item label="Возрастанию рейтинга" value="scoreup" />
          <RadioButton.Item label="Убыванию рейтинга" value="scoredown" />
        </RadioButton.Group>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => {
              setSortOption('user');
              onClose();
            }}
            style={[styles.actionButton, styles.resetButton]}
          >
            <Text style={styles.resetText}>Отмена</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={applyAndClose}
            style={[styles.actionButton, styles.doneButton]}
          >
            <Text style={styles.doneText}>Применить</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
