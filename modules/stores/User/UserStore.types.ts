export type UserStoreType = {
  id?: string;
  token?: string;
  refreshToken?: string;
  setUserData: (id: string, token: string, refreshToken: string) => void;
  resetStore: () => void;
};
