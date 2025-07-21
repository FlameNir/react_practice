import { StyleSheet } from 'react-native';
import { Metrics } from '@styles/metrics';
import { Colors } from '@styles/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
    //borderWidth: 2,
    //backgroundColor: "#F5F9FC",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    //marginBottom: 32,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 12,
    //marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 6,
    //width: 300,
    paddingVertical: 12,
    alignItems: 'center',
  },
  loginButtonText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
