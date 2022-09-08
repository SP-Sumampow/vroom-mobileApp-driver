import {ImageSourcePropType, ViewProps} from 'react-native';

export type AllFavoriteTypeProps = {} & ViewProps;

export type FavoriteTypeProps = {
  title: string;
  image: ImageSourcePropType;
} & ViewProps;

export type FavoriteItemType = {
  key: string;
  title: string;
  url: ImageSourcePropType;
};
