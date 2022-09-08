/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnectionScreen from './modules/connection/screen/ConnectionScreen';
import SettingsScreen from './modules/settings/screens/SettingsScreen';
import PictureTestScreen from './modules/test/screen/PictureTestScreen';
import SubscriptionScreen from './modules/subscription/screen/SubscriptionScreen';
import HomePageScreen from './modules/homePage/screen/HomePageScreen';
import {createNavigationContainerRef} from '@react-navigation/native';
import useUserStore from './stores/User/UserStore';
import MenuPageScreen from './modules/menuPage/screen/MenuPageScreen';
import LandingPageScreen from './modules/landingPage/screen/LandingPageScreen';

const DEFAULT_OPTIONS = {headerShown: false};

// const BACK_NAVIGATION = {
//   headerShown: Platform.OS === 'ios',
//   headerLeftLabelVisible: false,
//   title: '',
//   headerLeft: props => <Button />,
// };

const Stack = createNativeStackNavigator();

export const navigationRef = createNavigationContainerRef();

const Navigation = () => {
  const id = useUserStore(state => state.id);
  const resetStore = useUserStore(state => state.resetStore);

  useEffect(() => {
    if (id) {
      if (navigationRef.isReady()) {
        navigationRef.reset({
          index: 0,
          routes: [{name: 'HomePage'}],
        });
      }
    }
  }, [id]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="LandingPageScreen">
        <Stack.Screen name="Connection" component={ConnectionScreen} />
        <Stack.Screen
          name="HomePage"
          component={HomePageScreen}
          options={{...DEFAULT_OPTIONS}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{...DEFAULT_OPTIONS}}
        />
        <Stack.Screen name="Subscription" component={SubscriptionScreen} />
        <Stack.Screen
          name="PictureTestScreen"
          component={PictureTestScreen}
          options={{...DEFAULT_OPTIONS}}
        />
        <Stack.Screen
          name="LandingPageScreen"
          component={LandingPageScreen}
          options={{...DEFAULT_OPTIONS}}
        />
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="Menu"
            component={MenuPageScreen}
            options={{...DEFAULT_OPTIONS}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
