import {LatLng, Region} from 'react-native-maps';

export type AddressInfoType = {
  id: number;
  value: string;
  lon: string;
  lat: string;
  houseNumber: string;
  street: string;
  postalCode: string;
  country: string;
  libelle: string;
};

export type AddressDistanceInfoType = {
  distanceInKmStr?: string;
  durationStr?: string;
  distanceInKm?: number;
  durationInSeconds?: number;
};

export type AddressType = AddressInfoType &
  AddressDistanceInfoType & {
    latLng?: LatLng;
  };
