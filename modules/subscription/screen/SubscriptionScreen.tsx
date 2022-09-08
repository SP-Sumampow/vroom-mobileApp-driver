import {SafeAreaView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, {useCallback, useState} from 'react';
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm';
import VroomText from '../../global/Components/Text/VroomText';
import {styles} from '../../global/Components/Text/VroomText.styles';

// @ts-ignore
import LogoPurple from '../../../assets/svg/logo-vroomPurple.svg';
import customerService from '../../../services/customer/customerService';
import {Box, useToast} from 'native-base';
import {colors} from '../../global/theme/colors';
import useUserStore from '../../../stores/User/UserStore';

export default function SubscriptionScreen({navigation}: {navigation: any}) {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const setUserData = useUserStore(state => state.setUserData);

  const onSubmit = useCallback(
    async data => {
      const {email, firstName, lastName, password, phone} = data;

      setIsLoading(true);
      const {success, error} = await customerService.signUp(
        firstName.toLowerCase(),
        lastName.toLowerCase(),
        email.toLowerCase(),
        password.toLowerCase(),
        phone.toLowerCase(),
      );
      setIsLoading(false);

      if (error) {
        toast.show({
          render: () => {
            return (
              <Box
                bg={colors.alertColor.alertError.alertError50}
                px="2"
                py="1"
                rounded="sm"
                mb={5}>
                {error}
              </Box>
            );
          },
        });
      }

      if (!success) {
        return;
      }

      const {id, token, refreshToken} = success;
      setUserData(id, token, refreshToken);
      navigation.reset({
        index: 0,
        routes: [{name: 'HomePage'}],
      });
    },
    [toast, setIsLoading, setUserData, navigation],
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAwareScrollView
        style={styles.keyboardScroll}
        contentContainerStyle={styles.keyboardScrollContent}>
        <LogoPurple style={{marginTop: 40, marginBottom: 40}} />
        <VroomText title={"S'inscrire"} styleText={styles.header} />
        <SubscriptionForm onSubmit={onSubmit} isLoading={isLoading} />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
