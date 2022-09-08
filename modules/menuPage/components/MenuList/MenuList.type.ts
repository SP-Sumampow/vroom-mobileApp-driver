import {ViewProps} from 'react-native';

export type MenuListProps = {
  onMyAccount: () => void;
  onChildren: () => void;
  onPayment: () => void;
  onNeedHelp: () => void;
} & ViewProps;
