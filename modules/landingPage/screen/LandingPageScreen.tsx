import {SafeAreaView, View} from 'react-native';
import React, {useCallback} from 'react';
import LandingPageButton from '../components/Button/LandingPageButton';
import {styles} from '../components/Button/LandingPageButton.styles';

// @ts-ignore
import LogoWhite from '../../../assets/svg/vroomLogoWhite.svg';

export default function LandingPageScreen({navigation}: {navigation: any}) {
  const handleSignInOnClick = useCallback(() => {
    navigation.navigate('Connection');
  }, [navigation]);

  const handleSignUpOnClick = useCallback(() => {
    navigation.navigate('Subscription');
  }, [navigation]);

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#da84fa',
      }}>
      <LogoWhite style={{marginVertical: 240}} />
      <View style={{}}>
        <LandingPageButton
          variant={'outline'}
          onPress={handleSignInOnClick}
          title={'Se connecter'}
          style={styles.landingPageButtonConnection}
          textStyle={styles.landingPageButtonTextWhite}
        />
        <LandingPageButton
          onPress={handleSignUpOnClick}
          title={'S’inscrire'}
          style={styles.landingPageButtonSubscription}
          textStyle={styles.landingPageButtonTextPurple}
        />
        <LandingPageButton
          variant={'unstyled'}
          onPress={handleSignUpOnClick}
          title={'S’inscrire'}
          style={styles.landingPageButtonConnection}
          textStyle={styles.landingPageButtonTextWhite}
        />
      </View>
    </SafeAreaView>
  );
}
