import {StyleSheet} from 'react-native';
import {colors} from '../../../../global/theme/colors';

export const styles = StyleSheet.create({
  buttonSendSubscriptionActive: {
    height: 50,
    width: 350,
    backgroundColor: colors.secondaryColor,
    marginTop: 70,
  },
  buttonSendSubscriptionNonctive: {
    height: 50,
    width: 350,
    backgroundColor: colors.tertiaryColor.green,
    marginTop: 70,
  },
  buttonSendSubscriptionText: {
    color: colors.textColors.textWhite,
  },
});
