import {StyleSheet} from 'react-native';
import {colors} from '../../../global/theme/colors';

export const styles = StyleSheet.create({
  landingPageButtonConnection: {
    height: 50,
    width: 260,
    marginTop: 20,
    color: colors.textColors.textWhite,
    borderStyle: 'solid',
    borderRadius: 4,
    borderColor: colors.textColors.textWhite,
  },
  landingPageButtonSubscription: {
    height: 50,
    width: 260,
    backgroundColor: colors.textColors.textWhite,
    marginTop: 20,
    borderRadius: 4,
  },
  landingPageButtonDriver: {
    height: 50,
    width: 260,
    marginTop: 20,
    textDecorationLine: 'underline',
    color: colors.textColors.textWhite,
  },
  landingPageButtonTextWhite: {
    color: colors.textColors.textWhite,
    textDecorationLine: 'underline',
  },
  landingPageButtonTextPurple: {
    color: colors.textColors.textPurple,
  },
});
