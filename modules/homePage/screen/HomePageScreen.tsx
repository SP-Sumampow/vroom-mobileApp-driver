import {Linking, SafeAreaView, StyleSheet} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import Menu from '../components/Menu/Menu';
import MapView, {Marker, Polyline, Region} from 'react-native-maps';
import {PointType} from '../../../Model/Point/Point.types';
import Style from './HomePageScreen.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AddressDestinationForm from '../components/AddressDestinationForm/AddressDestinationForm';
// @ts-ignore

//{navigation}: {navigation: any}
export default function HomePageScreen({navigation}: {navigation: any}) {
  // Contants
  const {top: topSafeArea} = useSafeAreaInsets();
  // States
  const [centerRegion, setCenterRegion] = useState<Region | undefined>();
  const [startPoint, setStartPoint] = useState<PointType>({
    id: '0',
    title: 'Start point',
    description: 'blabla',
    region: {
      latitude: 48.8519287,
      longitude: 2.4235699,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const [endPoint, setEndPoint] = useState<PointType>({
    id: '1',
    title: 'End point',
    description: 'blabla',
    region: {
      latitude: 48.8584708,
      longitude: 2.4338033,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const handleOnClick = useCallback(async () => {
    await Linking.openURL('https://vroom-hetic.web.app/price');
  }, []);

  const handleMenuPress = useCallback(() => {
    navigation.navigate('Menu');
  }, [navigation]);

  const handleNotificationPress = useCallback(() => {}, []);

  const onRegionChange = useCallback(() => {}, []);

  // init
  useEffect(() => {
    setCenterRegion({
      latitude: 48.8519287,
      longitude: 2.4235699,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }, []);

  return (
    <SafeAreaView style={Style.container}>
      <Menu
        onMenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress}
      />

      <AddressDestinationForm
        style={[Style.formAddressContainer, {top: topSafeArea + 60}]}
      />

      <MapView
        style={StyleSheet.absoluteFill}
        region={centerRegion}
        onRegionChange={onRegionChange}>
        <Marker
          key={startPoint.id}
          coordinate={startPoint.region}
          title={startPoint.title}
          description={startPoint.description}
        />
        <Marker
          key={endPoint.id}
          coordinate={endPoint.region}
          title={endPoint.title}
          description={endPoint.description}
        />
        <Polyline
          coordinates={[
            {
              latitude: startPoint.region.latitude,
              longitude: startPoint.region.longitude,
            },
            {
              latitude: endPoint.region.latitude,
              longitude: endPoint.region.longitude,
            },
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={6}
        />
      </MapView>
    </SafeAreaView>
  );
}
