import {View} from 'react-native';
import React from 'react';
import {styles} from './InscriptionSuccedTextPart.styles';
import VroomText from '../../../global/Components/Text/VroomText';

// @ts-ignore
import LogoWhite from '../../../../assets/svg/vroomLogoWhite.svg';

// @ts-ignore
const InscriptionSuccedTextPart = () => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <View style={styles.InscriptionSuccedTextPart}>
      <LogoWhite />
      <VroomText title={'Félicitations'} styleText={styles.header} />
      <VroomText
        title={
          'Un e-mail ainsi qu’un sms de validation vous ont été envoyé. Confirmez via le lien envoyé pour vous connecter à l’application.'
        }
        styleText={styles.text}
      />
      <VroomText
        title={'Bienvenue sur l’application VROOM :)'}
        styleText={styles.text}
      />
    </View>
  );
};
export default InscriptionSuccedTextPart;
