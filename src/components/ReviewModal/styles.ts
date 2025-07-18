import { StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';
export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 20,
  },
  modalBox: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  nameInput: {
    borderBottomWidth: 1,
    borderColor: Colors.textPlaceholder,
    fontSize: 16,
    marginBottom: 16,
  },
  commentInput: {
    height: 100,
    fontSize: 16,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: Colors.textPlaceholder,
    padding: 8,
    marginBottom: 20,
    borderRadius: 6,
  },
  modalButton: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  modalButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
  },
  starUnSelected: {
    fontSize: 46,
    color: Colors.gray,
    marginHorizontal: 4,
  },
  starSelected: {
    fontSize: 46,
    color: Colors.starGold,
    marginHorizontal: 4,
  },
});
