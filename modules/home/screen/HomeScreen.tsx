import {View} from 'react-native';
import {Button, Heading} from 'native-base';
import React from 'react';
import {Box} from 'native-base';

export default function HomeScreen({navigation}: {navigation: any}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Box>
        <Heading size="xl" mb="4">
          Hello world
        </Heading>
        <Button onPress={() => navigation.navigate('Settings')}>
          Go to Details
        </Button>
      </Box>
    </View>
  );
}
