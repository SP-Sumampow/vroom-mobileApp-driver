import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RideStoreType} from './RideStore.types';
import {persist} from 'zustand/middleware';
import {AddressType} from '../../services/ride/rideService.types';

const INITIAL_STATES: {
  centerMapRegion: RideStoreType['centerMapRegion'];
} = {
  centerMapRegion: {
    latitude: 48.8519287,
    longitude: 2.4235699,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

const useRideStore = create<RideStoreType>()(
  persist(
    set => ({
      ...INITIAL_STATES,
      setRide: (startRideAddress: AddressType, endRideAddress: AddressType) =>
        set(() => ({
          startRideAddress: {
            ...startRideAddress,
            latLng: {
              latitude: parseFloat(startRideAddress.lat),
              longitude: parseFloat(startRideAddress.lon),
            },
          },
          endRideAddress: {
            ...endRideAddress,
            latLng: {
              latitude: parseFloat(endRideAddress.lat),
              longitude: parseFloat(endRideAddress.lon),
            },
          },
        })),
      resetStore: () => set(() => ({...INITIAL_STATES})),
    }),
    {
      name: 'ride-storage', // unique name
      getStorage: () => AsyncStorage, // Add this here!
    },
  ),
);

export default useRideStore;
