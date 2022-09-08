import {API_URL} from '../../Constant';
import {AddressDistanceInfoType, AddressInfoType} from './rideService.types';

export const searchAddress = async (
  address: string,
): Promise<
  | {success: AddressInfoType; error: undefined}
  | {success: undefined; error: string}
> => {
  const body = JSON.stringify({
    query: address,
  });
  try {
    const response = await fetch(`${API_URL}/ride/searchAddress`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    });

    const status = response.status;
    const data = await response.json();

    switch (status) {
      case 200:
        return {success: data[0] as any as AddressInfoType, error: undefined};
      default:
        return {success: undefined, error: data?.message ?? ''};
    }
  } catch (e: any) {
    console.error(e);
    return {success: undefined, error: e.message};
  }
};

export const calculateKmAndTime = async (
  startAddressInfo: AddressInfoType,
  endAddressInfo: AddressInfoType,
): Promise<
  | {success: AddressDistanceInfoType; error: undefined}
  | {success: undefined; error: string}
> => {
  const body = JSON.stringify({
    coordinates: [
      `${startAddressInfo.lon},${startAddressInfo.lat};${endAddressInfo.lon},${endAddressInfo.lat}`,
    ],
  });
  try {
    const response = await fetch(`${API_URL}/ride/calculateKmAndTime`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    });

    const status = response.status;
    const data = await response.json();

    switch (status) {
      case 200:
        return {
          success: data as any as AddressDistanceInfoType,
          error: undefined,
        };
      default:
        return {success: undefined, error: data?.message ?? ''};
    }
  } catch (e: any) {
    console.error(e);
    return {success: undefined, error: e.message};
  }
};

export default {
  searchAddress,
  calculateKmAndTime,
};
