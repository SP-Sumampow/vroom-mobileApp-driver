import {Text} from 'react-native';
import React from 'react';
import {VroomTextProps} from './VroomText.type';
// import {styles} from './Buttons.styles';
// import {ButtonProps} from './Buttons.type';

//import {StyleSheet, Text, useColorScheme, View} from 'react-native';
//import {Colors} from 'react-native/Libraries/NewAppScreen';

const VroomText = ({styleText, style, title}: VroomTextProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return <Text style={[styleText, style]}>{title}</Text>;
};

export default VroomText;
