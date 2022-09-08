import {ImageBackground} from 'react-native';
import {Button, Text} from 'native-base';
import {styles} from '../../inscriptionSucced/components/InscriptionSuccedButtonPart/ InscriptionSuccedButtonPart.styles';
import React from 'react';

export type ButtonProps = {
  onPress: () => void;
  title?: string;
};
