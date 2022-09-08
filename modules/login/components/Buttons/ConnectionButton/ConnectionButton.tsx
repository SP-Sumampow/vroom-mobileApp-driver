import {Button, Text} from 'native-base';
import React from 'react';
import {styles} from '../LoginPageButtonStyle.styles';
import {ButtonProps} from './ConnectionButton.type';

const ConnectionButton = ({onPress, title}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button style={styles.buttonConnection} onPress={onPress}>
      <Text style={styles.buttonTextWhite}>{title}</Text>
    </Button>
  );
};

export default ConnectionButton;
