import {StyleSheet} from 'react-native';
import {colors} from '../../global/theme/colors';

export const styles = StyleSheet.create({
  buttonViewAll: {
    width: 75,
  },
  buttonTakeSubscription: {
    height: 94,
    width: '90%',
    backgroundColor: colors.primaryColor,
    //marginTop: 70,
  },
  buttonHomePageTextGrey: {
    color: colors.textColors.textGrey,
  },
  buttonHomePageTextWhite: {
    color: colors.textColors.textWhite,
    fontSize: 24,
    fontWeight: '600',
    //height: 94,
    width: '50%',
    lineHeight: 32,
    marginHorizontal: 10,
  },
});
