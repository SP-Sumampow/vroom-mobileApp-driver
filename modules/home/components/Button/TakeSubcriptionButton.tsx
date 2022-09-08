import {Button, Text} from 'native-base';
import React from 'react';
//import {styles} from './TakeSubscriptionButton.styles';
import {TakeSubscriptionButtonType} from './TakeSubscriptionButton.type';

//import {StyleSheet, Text, useColorScheme, View} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

const TakeSubcriptionButton = ({
  onPress,
  title,
  styleBox,
  styleText,
}: TakeSubscriptionButtonType) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button style={styleBox} onPress={onPress}>
      <Text style={styleText}>{title}</Text>
    </Button>
  );
};

export default TakeSubcriptionButton;
