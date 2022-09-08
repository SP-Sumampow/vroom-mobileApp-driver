import {StyleProp, TextStyle, TextProps} from 'react-native';

export type VroomTextProps = {
  title: string;
  styleText: StyleProp<TextStyle>;
} & TextProps;
