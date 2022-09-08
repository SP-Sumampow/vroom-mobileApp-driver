import {StyleSheet} from 'react-native';
import {colors} from '../../../../../global/theme/colors';

export const styles = StyleSheet.create({
  favoriteTypeBox: {
    flexDirection: 'row',
    width: 134,
    height: 134,
    marginHorizontal: 4,
    borderRadius: 8,
  },
  favoriteTypeBoxText: {
    color: colors.textColors.textWhite,
    fontSize: 20,
    textAlign: 'left',
  },
  favoriteTypeBoxImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
