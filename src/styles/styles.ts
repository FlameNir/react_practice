import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    // borderWidth: 1, //Удалить
    // borderColor: '#000',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 32,
    marginBottom: 24,
    // borderWidth: 1, //Удалить
    // borderColor: '#000',
    // backgroundColor: '#1f1',
  },
  ratingBox: {
    width: 90,
    alignItems: 'center',
    marginTop: 4,
    // borderWidth: 1, //Удалить
  },
  avgRating: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#006CB1',
  },
  smallText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  leaveReviewButton: {
    backgroundColor: '#D0E6F9',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 20,
  },
  leaveReviewText: {
    color: '#006CB1',
    fontWeight: '600',
    fontSize: 16,
  },
  //----Отзывы
  reviewItem: {
    padding: 12,
    // borderWidth: 1, //Удалить
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reviewName: {
    // borderWidth: 1, //Удалить
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewStar: {
    flexDirection: 'row',
    // borderWidth: 1, //Удалить
  },
  reviewStarSelected: {
    fontSize: 16,
    color: '#FFD700',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  reviewStarUnSelected: {
    fontSize: 16,
    color: '#ccc',
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  reviewText: {
    borderWidth: 1,
    fontSize: 14,
    color: '#000',
  },
  //------------------------------------------------------------------------
  //Модалка
  //
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    // borderWidth: 1, //Удалить
  },
  modalBox: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    // borderWidth: 1, //Удалить
  },
  nameInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    marginBottom: 16,
    // borderWidth: 1, //Удалить
  },
  commentInput: {
    height: 100,
    fontSize: 16,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#006CB1',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    // borderWidth: 1, //Удалить
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    // borderWidth: 1, //Удалить
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
    // borderWidth: 1, //Удалить
  },
  starUnSelected: {
    fontSize: 46,
    color: '#ccc',
    marginHorizontal: 4,
    // borderWidth: 1, //Удалить
  },

  starSelected: {
    fontSize: 46,
    color: '#FFD700',
    marginHorizontal: 4,
    // borderWidth: 1, //Удалить
  },
});
