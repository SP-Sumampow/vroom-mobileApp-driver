import {Button, Text} from 'native-base';
import React from 'react';
import {styles} from './DriverButton.styles';
import {ButtonProps} from './DriverButton.type';

const SendSubscriptionButton = ({onPress, title}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button variant={'Unstyled'} onPress={onPress}>
      <Text style={styles.buttonAsDriverText}>{title}</Text>
    </Button>
  );
};

export default SendSubscriptionButton;
