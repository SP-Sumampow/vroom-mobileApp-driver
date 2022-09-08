import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  title: string;
  style: StyleProp<ViewStyle>;
  textStyle: StyleProp<TextStyle>;
  variant?: string;
  isLoading?: boolean;
};
