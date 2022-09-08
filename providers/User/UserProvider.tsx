import React, {createContext} from 'react';
import {
  UserProviderContextType,
  UserProviderPropsType,
} from './UserProvider.types';

export const userProvider = createContext<UserProviderContextType>({
  test: false,
});

export const UserProvider = ({
  children: childrenComponent,
}: UserProviderPropsType) => {
  return (
    <userProvider.Provider value={{test: false}}>
      {childrenComponent}
    </userProvider.Provider>
  );
};
