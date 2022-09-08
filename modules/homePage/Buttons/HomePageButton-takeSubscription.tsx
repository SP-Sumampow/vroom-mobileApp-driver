import {Button, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './HomePageButton.styles';
import {ButtonProps} from './HomePageButton.type';

// @ts-ignore
import ArrowWhite from '../../../assets/svg/arrowWhite.svg';

const HomePageButtonTakeSubscription = ({onPress}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <TouchableOpacity
      style={[
        styles.buttonTakeSubscription,
        {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 8,
        },
      ]}
      onPress={onPress}>
      <Text style={styles.buttonHomePageTextWhite}>
        {'Passez à un abonnement'}
      </Text>
      <ArrowWhite width={'10%'} marginHorizontal={10} />
    </TouchableOpacity>
  );
};

export default HomePageButtonTakeSubscription;
