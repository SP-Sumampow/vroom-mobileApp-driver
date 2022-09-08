import React, {useCallback} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import FavoriteType from './FavoriteType';
import {AllFavoriteTypeProps, FavoriteItemType} from './FavoriteType.type';
const AllFavoriteType = ({style}: AllFavoriteTypeProps) => {
  const handleFavoritePressed = useCallback(
    (index: number) => () => {
      console.log(index);
    },
    [],
  );

  const renderFavorite =
    (onHandleFavoritePressed: (index: number) => () => void) =>
    ({item, index}: {item: FavoriteItemType; index: number}) =>
      (
        <TouchableOpacity
          key={item.key}
          onPress={onHandleFavoritePressed(index)}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <FavoriteType title={item.title} image={item.url} />
          </View>
        </TouchableOpacity>
      );

  const favorites: FavoriteItemType[] = [
    {
      key: '1',
      title: 'École',
      url: require('../../../../../../assets/png/favoriteType-school.png'),
    },
    {
      key: '2',
      title: 'Théatre',
      url: require('../../../../../../assets/png/favoriteType-school.png'),
    },
    {
      key: '3',
      title: 'Sport',
      url: require('../../../../../../assets/png/favoriteType-school.png'),
    },
    {
      key: '4',
      title: 'École',
      url: require('../../../../../../assets/png/favoriteType-school.png'),
    },
    {
      key: '5',
      title: 'Théatre',
      url: require('../../../../../../assets/png/favoriteType-school.png'),
    },
    {
      key: '6',
      title: 'Sport',
      url: require('../../../../../../assets/png/favoriteType-school.png'),
    },
  ];

  const podcastKeyExtractor = (favorite: FavoriteItemType) => favorite.key;

  return (
    <FlatList
      style={style}
      data={favorites}
      keyExtractor={podcastKeyExtractor}
      showsVerticalScrollIndicator={false}
      renderItem={renderFavorite(handleFavoritePressed)}
      numColumns={999}
      alwaysBounceVertical={false}
      pagingEnabled
    />
  );
};

export default AllFavoriteType;
