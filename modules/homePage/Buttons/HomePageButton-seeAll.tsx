import {Button, Text} from 'native-base';
import React from 'react';
import {styles} from './HomePageButton.styles';
import {ButtonProps} from './HomePageButton.type';

// @ts-ignore
import ArrowGrey from '../../../assets/svg/arrowGrey.svg';

const HomePageButtonSeeAll = ({onPress, title}: ButtonProps) => {
  //const isDarkMode = {useColorScheme() === 'dark';
  return (
    <Button variant="unstyled" style={styles.buttonViewAll} onPress={onPress}>
      <Text style={styles.buttonHomePageTextGrey}>{title}</Text>
      <ArrowGrey />
    </Button>
  );
};

export default HomePageButtonSeeAll;
