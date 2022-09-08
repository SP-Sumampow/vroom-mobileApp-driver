import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TakeSubscriptionButtonType = {
  onPress: () => void;
  title: string;
  styleBox: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
};
