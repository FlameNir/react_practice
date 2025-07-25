import { StyleSheet } from 'react-native';
import { Metrics } from '@styles/metrics';
import { Colors } from '@styles/colors';

export const histogramStyles = StyleSheet.create({
  histogramBox: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  histogramRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  histogramBar: {
    height: 8,
    position: 'absolute',
    backgroundColor: Colors.primary,
    marginHorizontal: 6,
    borderRadius: 6,
  },
  histogramLayer: {
    flex: 1,
    height: 10,
    justifyContent: 'center',
    position: 'relative',
  },
  histogramBackgroundBar: {
    width: Metrics.screenWidth * 0.4,
    marginHorizontal: 6,
    height: 8,
    backgroundColor: Colors.primaryLight,
    borderRadius: 6,
  },
  histogramCount: {
    width: 20,
    textAlign: 'left',
  },
});
