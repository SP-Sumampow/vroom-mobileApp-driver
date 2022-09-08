import {Text} from 'native-base';
import {View, ImageBackground} from 'react-native';
import React from 'react';
import {FavoriteTypeProps} from './FavoriteType.type';
import {styles} from './FavoriteType.styles';

const FavoriteType = ({image, title}: FavoriteTypeProps) => {
  return (
    <View style={styles.favoriteTypeBox}>
      <ImageBackground source={image} style={styles.favoriteTypeBoxImage}>
        <Text style={styles.favoriteTypeBoxText}>{title}</Text>
      </ImageBackground>
    </View>
  );
};

export default FavoriteType;
