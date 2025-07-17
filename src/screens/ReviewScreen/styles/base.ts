import { StyleSheet, Dimensions } from 'react-native';

import { Metrics } from '@styles/metrics.ts';
import { Colors } from '@styles/colors';

export const baseStyles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.white,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 32,
    marginBottom: 24,
  },
  ratingBox: {
    width: Metrics.screenWidth * 0.3,
    alignItems: 'center',
    marginTop: 4,
  },
  avgRating: {
    fontSize: 72,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  smallText: {
    fontSize: 14,
    color: Colors.textGray,
    textAlign: 'center',
  },
  leaveReviewButton: {
    backgroundColor: Colors.primaryLight,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  leaveReviewText: {
    color: Colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
});
