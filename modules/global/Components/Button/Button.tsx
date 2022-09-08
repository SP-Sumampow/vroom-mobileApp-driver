import {Button, Text} from 'native-base';
import React from 'react';
import {styles} from './Button.styles';
import {ButtonProps} from './Button.type';

//import {StyleSheet, Text, useColorScheme, View} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

const VroomButton = ({onPress, title}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Button>
  );
};

export default VroomButton;
