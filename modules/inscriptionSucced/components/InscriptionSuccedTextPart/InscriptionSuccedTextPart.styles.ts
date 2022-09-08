import {StyleSheet} from 'react-native';
import {colors} from '../../../global/theme/colors';

export const styles = StyleSheet.create({
  InscriptionSuccedTextPart: {
    flex: 2,
    backgroundColor: colors.backgroundGolors.purple,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textColors.textWhite,
  },
  text: {
    fontSize: 16,
    color: colors.textColors.textWhite,
    textAlign: 'center',
  },
});
