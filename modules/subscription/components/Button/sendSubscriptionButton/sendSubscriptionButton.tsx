import {Button, Text} from 'native-base';
import React from 'react';
import {styles} from './sendSubscriptionButton.styles';
import {ButtonProps} from './sendSubscriptionButton.type';

const SendSubscriptionButton = ({onPress, title, isLoading}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button
      isLoading={isLoading}
      isDisabled={isLoading}
      style={styles.buttonSendSubscriptionNonctive}
      onPress={onPress}>
      <Text style={styles.buttonSendSubscriptionText}>{title}</Text>
    </Button>
  );
};

export default SendSubscriptionButton;
