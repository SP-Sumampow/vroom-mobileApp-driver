import create from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserStoreType} from './UserStore.types';
import {persist} from 'zustand/middleware';

const INITIAL_STATES: {
  id: UserStoreType['id'];
  token: UserStoreType['token'];
  refreshToken: UserStoreType['refreshToken'];
} = {
  id: undefined,
  token: undefined,
  refreshToken: undefined,
};

const useUserStore = create<UserStoreType>()(
  persist(
    set => ({
      ...INITIAL_STATES,
      setUserData: (id: string, token: string, refreshToken: string) => {
        set(() => ({id, token, refreshToken}));
      },
      resetStore: () => set(() => ({...INITIAL_STATES})),
    }),
    {
      name: 'user-storage',
      getStorage: () => AsyncStorage,
    },
  ),
);

export default useUserStore;
