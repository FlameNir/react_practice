import { StyleSheet } from 'react-native';

export const reviewListStyles = StyleSheet.create({
  reviewItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  reviewName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  reviewText: {
    fontSize: 14,
    color: '#000',
  },
  reviewData: {
    marginLeft: 20,
    fontSize: 13,
    color: '#006CB1',
    justifyContent: 'center',
    gap: 8,
  },
  reviewStar: {
    flexDirection: 'row',
    justifyContent: 'center',
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
});
