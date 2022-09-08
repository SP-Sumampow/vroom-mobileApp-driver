/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import './i18n';
import {NativeBaseProvider} from 'native-base';
import Navigation from './Navigation';
import {UserProvider} from './providers/User/UserProvider';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <UserProvider>
          <Navigation />
        </UserProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;
