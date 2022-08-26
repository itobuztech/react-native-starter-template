import {Platform, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../constant/Color';

const LoginStyle = StyleSheet.create({
  wrapper: {
    display: 'flex',
    height: '100%',
    backgroundColor: Colors.evc.black,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 40,
  },
});

export default LoginStyle;
