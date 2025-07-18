import { StyleSheet } from 'react-native';
import { Metrics } from '@styles/metrics';
import { Colors } from '@styles/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'flex-start',
    backgroundColor: Colors.white,
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
    paddingVertical: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: Colors.primaryLight,
    borderRadius: 6,
    //width: 300,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  loginButtonText: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 40,
    width: Metrics.screenWidth,
    alignItems: 'center',
  },
  metaText: {
    color: Colors.gray,
    fontSize: 12,
  },
});
