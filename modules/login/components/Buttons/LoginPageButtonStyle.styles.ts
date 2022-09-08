import {StyleSheet} from 'react-native';
import {colors} from '../../../global/theme/colors';

export const styles = StyleSheet.create({
  buttonConnection: {
    height: 50,
    width: 276,
    backgroundColor: colors.primaryColor,
  },
  buttonInscription: {
    height: 50,
    width: 276,
    backgroundColor: '#fff',
    borderColor: colors.primaryColor,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttonTextWhite: {
    color: '#fff',
  },
  buttonTexPurple: {
    color: colors.primaryColor,
  },
});
