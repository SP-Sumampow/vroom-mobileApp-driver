import {StyleSheet} from 'react-native';
import {colors} from '../../global/theme/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  formAddressContainer: {
    position: 'absolute',
    left: 16,
    right: 16,
    zIndex: 3,
    backgroundColor: colors.secondaryColor,
  },
  formAddressButton: {
    height: 50,
    marginHorizontal: 16,
    backgroundColor: colors.textColors.textWhite,
  },
  formAdressButtonText: {
    color: colors.textColors.textBlack,
    fontWeight: 'bold',
  },
});
export default styles;
