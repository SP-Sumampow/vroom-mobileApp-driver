import {Linking, SafeAreaView} from 'react-native';
import React, {useCallback} from 'react';
import Menu from '../components/Menu/Menu';
import SearchDestination from '../components/SearchDestination/SearchDestination';
import HomePageButtonTakeSubscription from '../Buttons/HomePageButton-takeSubscription';
import AllFavoriteType from '../components/FavoriteList/components/FavoriteType/AllFavoriteType';

// @ts-ignore

//{navigation}: {navigation: any}
export default function HomePageScreen({navigation}: {navigation: any}) {
  const handleOnClick = useCallback(async () => {
    await Linking.openURL('https://vroom-hetic.web.app/price');
  }, []);

  const handleMenuPress = useCallback(() => {
    navigation.navigate('Menu');
  }, [navigation]);

  const handleNotificationPress = useCallback(() => {}, []);

  return (
    <SafeAreaView
      style={{
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <Menu
        onMenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress}
      />
    </SafeAreaView>
  );
}
