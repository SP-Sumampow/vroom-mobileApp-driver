import {Button, Text} from 'native-base';
import React from 'react';
import {ButtonProps} from './LandingPageButton.type';

const LandingPageButton = ({
  onPress,
  title,
  style,
  textStyle,
  variant,
}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button onPress={onPress} style={style} variant={variant}>
      <Text style={textStyle}>{title}</Text>
    </Button>
  );
};

export default LandingPageButton;
