import {SafeAreaView, Image, Text} from 'react-native';
import Styles from './PictureTestScreen.styles';
import React from 'react';
import Lottie from 'lottie-react-native';
// @ts-ignore
import DemoSvg from '../../../assets/svg/demo-svg.svg';
import {View} from 'native-base';

const PictureTestScreen = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <Text>png</Text>
      <Image
        style={Styles.dummyPng}
        source={require('../../../assets/png/picture-demo.png')}
      />
      <Text>svg</Text>
      <DemoSvg height="20%" width="100%" />
      <Text>lottie</Text>
      <View style={Styles.dummyPng}>
        <Lottie
          source={require('../../../assets/lottie/spiner-demo.json')}
          autoPlay
        />
      </View>
    </SafeAreaView>
  );
};

export default PictureTestScreen;
