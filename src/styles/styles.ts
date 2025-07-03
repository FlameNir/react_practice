import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    height: height * 0.1,
    width: width * 0.6,
    borderWidth: 2,
    borderColor: '#006CB1',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  boxModal: {
    height: height * 0.25,
    width: width * 0.6,
    borderWidth: 2,
    borderColor: '#006CB1',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#006CB1',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  value: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: '#006CB1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  starsRow: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginTop: 16,
    marginBottom: 16,
    height: 100,
    textAlignVertical: 'top',
    color: '#000',
    width: '100%',
  },

  star: {
    fontSize: 32,
    color: '#ccc',
    marginRight: 4,
  },
  starSelected: {
    fontSize: 32,
    color: '#FFD700',
    marginRight: 4,
  },
  dateText: {
    top: '30%',
    fontSize: 16,
    color: '#006CB1',
  },
});
export default styles;
