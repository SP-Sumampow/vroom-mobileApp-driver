import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    height: 40,
    color: 'coolgray.800',
  },
  buttonTextBlack: {
    color: colors.textColors.textBlack,
  },
  buttonTextPurple: {
    color: colors.textColors.textPurple,
  },
  buttonTextWhite: {
    color: colors.textColors.textWhite,
  },
  buttonSmallPurple: {
    height: 45,
    width: 190,
    backgroundColor: colors.primaryColor,
  },
  buttonSmallWhite: {
    height: 45,
    width: 190,
    backgroundColor: '#fff',
    borderColor: colors.primaryColor,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  buttonMediumShort: {
    height: 50,
    width: 275,
  },
  buttonMediumLong: {
    height: 50,
    width: 377,
  },
});
