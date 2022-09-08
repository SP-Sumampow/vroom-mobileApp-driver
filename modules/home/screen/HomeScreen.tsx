import {View} from 'react-native';
import {Heading} from 'native-base';
import React, {useCallback} from 'react';
import {Box} from 'native-base';
import TakeSubcriptionButton from '../components/Button/TakeSubcriptionButton';
import {styles} from '../../global/Components/Button/Button.styles';

export default function HomeScreen({navigation}: {navigation: any}) {
  const handleOnClick = useCallback(() => {
    console.log('hey');
    navigation.navigate('Settings');
  }, [navigation]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Box>
        <Heading size="xl" mb="4">
          Hello world
        </Heading>
        {/* <Buttons onPress={() => navigation.navigate('Settings')}>coucou</Buttons> */}
        <TakeSubcriptionButton
          styleBox={styles.buttonSmallPurple}
          styleText={styles.buttonTextWhite}
          onPress={handleOnClick}
          title={'test'}
        />
      </Box>
    </View>
  );
}
