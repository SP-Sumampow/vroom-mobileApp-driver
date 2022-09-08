import {ViewProps} from 'react-native';

export type AddressDestinationFormProps = {
  onDestinationSearchSubmit: (data: any) => Promise<void>;
} & ViewProps;
