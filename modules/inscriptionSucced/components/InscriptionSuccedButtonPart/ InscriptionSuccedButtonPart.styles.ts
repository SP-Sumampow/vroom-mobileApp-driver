import {StyleSheet} from 'react-native';
import {colors} from '../../../global/theme/colors';

export const styles = StyleSheet.create({
  InscriptionSuccedButtonPart: {
    flex: 2,
    backgroundColor: colors.backgroundGolors.purple,
    justifyContent: 'flex-end',
  },
  buttonBackToHomePage: {
    height: 50,
    width: 350,
    backgroundColor: colors.textColors.textWhite,
    marginTop: 70,
  },
  buttonSendSubscriptionText: {
    color: colors.textColors.textBlack,
    fontWeight: 'bold',
  },
  InscriptionSuccedButtonImage: {
    height: 400,
    justifyContent: 'flex-end',
  },
});
