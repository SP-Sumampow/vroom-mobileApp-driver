import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

export const styles = StyleSheet.create({
  keyboardScroll: {
    width: '100%',
    flex: 1,
  },
  keyboardScrollContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.textColors.textBlack,
  },
  headerPurple: {
    fontSize: 32,
    color: colors.textColors.textPurple,
  },
  titleH2: {
    fontSize: 24,
    color: colors.textColors.textBlack,
    fontWeight: 'bold',
  },
  titleH3: {
    fontSize: 24,
    color: colors.textColors.textBlack,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'grey',
    fontWeight: 'bold',
  },
  regularText: {
    fontSize: 16,
  },
});
