import { StyleSheet, Dimensions } from 'react-native';

// const { width, height } = Dimensions.get('window');

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     height: height * 0.1,
//     width: width * 0.6,
//     borderWidth: 2,
//     borderColor: '#006CB1',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },
//   boxModal: {
//     height: height * 0.25,
//     width: width * 0.6,
//     borderWidth: 2,
//     borderColor: '#006CB1',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },
//   ratingRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   label: {
//     color: '#006CB1',
//     fontSize: 16,
//     fontFamily: 'Roboto',
//   },
//   value: {
//     color: '#000000',
//     fontSize: 16,
//     fontFamily: 'Roboto',
//   },
//   button: {
//     backgroundColor: '#006CB1',
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     borderRadius: 4,
//   },
//   buttonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontFamily: 'Roboto',
//   },
//   starsRow: {
//     flexDirection: 'row',
//   },
//   textInput: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 10,
//     marginTop: 16,
//     marginBottom: 16,
//     height: 100,
//     textAlignVertical: 'top',
//     color: '#000',
//     width: '100%',
//   },

//   star: {
//     fontSize: 32,
//     color: '#ccc',
//     marginRight: 4,
//   },
//   starSelected: {
//     fontSize: 32,
//     color: '#FFD700',
//     marginRight: 4,
//   },
//   dateText: {
//     top: '30%',
//     fontSize: 16,
//     color: '#006CB1',
//   },
// });
// export default styles;
export const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    // borderColor: '#000',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 32,
    marginBottom: 24,
    borderWidth: 1,
    // borderColor: '#000',
    // backgroundColor: '#1f1',
  },
  ratingBox: {
    width: 90,
    alignItems: 'center',
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#000',
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
  histogram: {
    flex: 1,
    justifyContent: 'center',
  },
  histogramRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  histogramLabel: {
    width: 20,
    fontSize: 14,
    color: '#000',
    textAlign: 'right',
  },
  histogramBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginLeft: 8,
  },
  histogramBar: {
    height: '100%',
    backgroundColor: '#006CB1',
    borderRadius: 4,
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
    borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reviewName: {
    borderWidth: 1,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewStar: {
    flexDirection: 'row',
    borderWidth: 1,
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
    color: '#333',
  },
  //------------------------------------------------------------------------
  //Модалка
  //
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    borderWidth: 1, //Удалить
  },
  modalBox: {
    flex: 1,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    borderWidth: 1, //Удалить
  },
  nameInput: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1, //Удалить
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
    borderWidth: 1, //Удалить
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    borderWidth: 1, //Удалить
  },
  starsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    width: '100%',
    borderWidth: 1, //Удалить
  },
  starUnSelected: {
    fontSize: 46,
    color: '#ccc',
    marginHorizontal: 4,
    borderWidth: 1, //Удалить
  },

  starSelected: {
    fontSize: 46,
    color: '#FFD700',
    marginHorizontal: 4,
    borderWidth: 1, //Удалить
  },
});
