import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const Metrics = {
  screenWidth: width,
  screenHeight: height,
};
