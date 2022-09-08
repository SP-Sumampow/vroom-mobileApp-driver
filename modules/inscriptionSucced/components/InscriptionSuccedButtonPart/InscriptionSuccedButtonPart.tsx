import {Button, Text} from 'native-base';
import {View, ImageBackground} from 'react-native';
import React from 'react';
import {styles} from './ InscriptionSuccedButtonPart.styles';
import {InscriptionSuccedButtonProps} from './InscriptionSuccedButtonPart.type';

// @ts-ignore
const InscriptionSuccedButton = ({
  onPress,
  title,
}: InscriptionSuccedButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <View style={styles.InscriptionSuccedButtonPart}>
      <ImageBackground
        style={styles.InscriptionSuccedButtonImage}
        source={require('../../../../assets/png/inscriptionSucced-boy.png')}
        resizeMode="cover">
        <Button style={styles.buttonBackToHomePage} onPress={onPress}>
          <Text style={styles.buttonSendSubscriptionText}>{title}</Text>
        </Button>
      </ImageBackground>
    </View>
  );
};

export default InscriptionSuccedButton;
