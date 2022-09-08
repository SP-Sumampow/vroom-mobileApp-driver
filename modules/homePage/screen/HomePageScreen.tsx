import {Linking, SafeAreaView, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import Menu from '../components/Menu/Menu';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Style from './HomePageScreen.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AddressDestinationForm from '../components/AddressDestinationForm/AddressDestinationForm';
import {
  calculateKmAndTime,
  searchAddress,
} from '../../../services/ride/rideService';
import useRideStore from '../../../stores/Ride/RideStore';
// @ts-ignore
export default function HomePageScreen({navigation}: {navigation: any}) {
  // Contants
  const {top: topSafeArea} = useSafeAreaInsets();

  const setRide = useRideStore(state => state.setRide);
  const resetStore = useRideStore(state => state.resetStore);

  const centerMapRegion = useRideStore(state => state.centerMapRegion);
  const startRideAddress = useRideStore(state => state.startRideAddress);
  const endRideAddress = useRideStore(state => state.endRideAddress);

  const handleOnClick = useCallback(async () => {
    await Linking.openURL('https://vroom-hetic.web.app/price');
  }, []);

  console.log('val start', startRideAddress);
  console.log('val end', endRideAddress);

  const handleMenuPress = useCallback(() => {
    navigation.navigate('Menu');
  }, [navigation]);

  const handleNotificationPress = useCallback(() => {}, []);

  const onRegionChange = useCallback(() => {}, []);

  const handleDestinationSearchSubmit = useCallback(
    async data => {
      const {startAddress, endAddress} = data;
      try {
        const {success: startAddressInfo} = await searchAddress(startAddress);
        const {success: endAddressInfo} = await searchAddress(endAddress);

        console.log(startAddressInfo, endAddressInfo);

        if (startAddressInfo && endAddressInfo) {
          const {success: distanceInfo} = await calculateKmAndTime(
            startAddressInfo,
            endAddressInfo,
          );

          setRide(
            {...startAddressInfo, ...(distanceInfo ?? {})},
            {...endAddressInfo, ...(distanceInfo ?? {})},
          );
        }
      } catch (e) {
        console.error(e);
      }
    },
    [setRide],
  );

  return (
    <SafeAreaView style={Style.container}>
      <Menu
        onMenuPress={handleMenuPress}
        onNotificationPress={handleNotificationPress}
      />

      <AddressDestinationForm
        onDestinationSearchSubmit={handleDestinationSearchSubmit}
        style={[Style.formAddressContainer, {top: topSafeArea + 60}]}
      />

      <MapView
        style={StyleSheet.absoluteFill}
        region={centerMapRegion}
        onRegionChange={onRegionChange}>
        {startRideAddress && startRideAddress.latLng ? (
          <Marker
            key={startRideAddress.street}
            coordinate={startRideAddress.latLng}
            title={startRideAddress.street}
            description={`${startRideAddress.durationStr} / ${startRideAddress.distanceInKmStr}`}
          />
        ) : undefined}

        {endRideAddress && endRideAddress.latLng ? (
          <Marker
            key={endRideAddress.street}
            coordinate={endRideAddress.latLng}
            title={endRideAddress.street}
            description={`${endRideAddress.durationStr} / ${endRideAddress.distanceInKmStr}`}
          />
        ) : undefined}

        {startRideAddress &&
        startRideAddress.latLng &&
        endRideAddress &&
        endRideAddress.latLng ? (
          <Polyline
            coordinates={[
              {
                latitude: startRideAddress.latLng.latitude,
                longitude: startRideAddress.latLng.longitude,
              },
              {
                latitude: endRideAddress.latLng.latitude,
                longitude: endRideAddress.latLng.longitude,
              },
            ]}
            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
            strokeColors={['#7F0000']}
            strokeWidth={6}
          />
        ) : undefined}
      </MapView>
    </SafeAreaView>
  );
}
