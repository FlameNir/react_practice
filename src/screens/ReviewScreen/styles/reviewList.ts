import { StyleSheet } from 'react-native';
import { Colors } from '@styles/colors';

export const reviewListStyles = StyleSheet.create({
  reviewItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  reviewName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 14,
    color: Colors.black,
  },
  reviewData: {
    marginLeft: 20,
    fontSize: 13,
    color: Colors.primary,
    justifyContent: 'center',
    gap: 8,
  },
  reviewStar: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  reviewStarSelected: {
    fontSize: 16,
    color: Colors.starGold,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
  reviewStarUnSelected: {
    fontSize: 16,
    color: Colors.gray,
    fontWeight: 'bold',
    marginHorizontal: 2,
  },
});
