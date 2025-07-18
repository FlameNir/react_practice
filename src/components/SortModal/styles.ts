import { StyleSheet } from 'react-native';
import { Metrics } from '@styles/metrics';
import { Colors } from '@styles/colors';
export const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
  },
  modalBottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: Metrics.screenWidth,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 15,
    zIndex: 10,
  },
  closeButtonText: {
    fontSize: 26,
    color: Colors.gray,
  },
  modalTitle1: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: Colors.grayLight,
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  doneButton: {
    backgroundColor: Colors.primary,
    flex: 1,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetText: {
    color: Colors.black,
    fontWeight: '500',
  },
  doneText: {
    color: Colors.white,
    fontWeight: '600',
  },
});
