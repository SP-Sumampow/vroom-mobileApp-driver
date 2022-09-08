import {Button, Text} from 'native-base';
import React from 'react';
import {styles} from './SendConnectionButton.styles';
import {ButtonProps} from './SendConnectionButton.type';

const SendConnectionButton = ({onPress, title, isLoading}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading}
      style={styles.buttonSendConnection}
      onPress={onPress}>
      <Text style={styles.buttonSendConnectionText}>{title}</Text>
    </Button>
  );
};

export default SendConnectionButton;
