import {AddressType} from '../../services/ride/rideService.types';
import {Region} from 'react-native-maps';

export type RideStoreType = {
  startRideAddress?: AddressType;
  endRideAddress?: AddressType;
  centerMapRegion: Region;
  setRide: (startRideAddress: AddressType, endRideAddress: AddressType) => void;
  resetStore: () => void;
};
