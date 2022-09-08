import {SafeAreaView, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import SendConnectionButton from '../components/SendConnectionButton/SendConnectionButton';
import ConnectionForm from '../components/Form/ConnectionForm';
import VroomText from '../../global/Components/Text/VroomText';
import {styles} from '../../global/Components/Text/VroomText.styles';

// @ts-ignore
import LogoPurple from '../../../assets/svg/logo-vroomPurple.svg';

import {colors} from '../../global/theme/colors';
import useUserStore from '../../../stores/User/UserStore';
import customerService from '../../../services/customer/customerService';
import {Box, useToast} from 'native-base';
import {useTranslation} from 'react-i18next';
import {userProvider} from '../../../providers/User/UserProvider';
import {Controller, SubmitErrorHandler, useForm} from 'react-hook-form';
import {SignInInputs} from './ConnectionScreen.types';

export default function ConnectionScreen({navigation}: {navigation: any}) {
  const [isLoading, setIsLoading] = useState(false);
  const setUserData = useUserStore(state => state.setUserData);
  const toast = useToast();
  const {t} = useTranslation();
  const {test} = useContext(userProvider);
  const {control, handleSubmit} = useForm<SignInInputs>();

  useEffect(() => {
    console.log(test);
  }, [test]);

  const onError: SubmitErrorHandler<SignInInputs> = errors => {
    const val = [errors.password, errors.email].find(
      input => input?.ref !== undefined,
    );

    const ref = val?.ref as any;
    const name = ref.name;
    const nameTrad = t(name).toLowerCase();

    toast.show({
      render: () => {
        return (
          <Box
            bg={colors.alertColor.alertError.alertError50}
            px="2"
            py="1"
            rounded="sm"
            mb={5}>
            {`le champs ${nameTrad} n'est pas valide`}
          </Box>
        );
      },
    });
    return console.log(errors);
  };

  const handleOnSubmit = useCallback(
    async data => {
      const {email, password} = data;

      setIsLoading(true);
      const {success, error} = await customerService.signIn(
        email.toLowerCase(),
        password.toLowerCase(),
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

      if (success.hasOwnProperty('message')) {
        toast.show({
          render: () => {
            return (
              <Box
                bg={colors.alertColor.alertError.alertError50}
                px="2"
                py="1"
                rounded="sm"
                mb={5}>
                {success?.message}
              </Box>
            );
          },
        });
        return;
      }

      console.log(success);

      const {id, token, refreshToken} = success;
      setUserData(id, token, refreshToken);
      navigation.reset({
        index: 0,
        routes: [{name: 'HomePage'}],
      });
    },
    [setUserData, navigation, toast],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      <LogoPurple style={{marginTop: 40, marginBottom: 40}} />
      <View style={{height: '60%'}}>
        <VroomText
          style={{textAlign: 'center', marginVertical: 20}}
          styleText={styles.header}
          title={'Se connecter'}
        />
        <View>
          <Controller
            control={control}
            render={({field: {onChange}}) => (
              <ConnectionForm
                onChange={onChange}
                placeholder={'E-mail'}
                label={'E-mail'}
              />
            )}
            name="email"
            rules={{required: true}}
          />
          <Controller
            control={control}
            render={({field: {onChange}}) => (
              <ConnectionForm
                secureTextEntry
                onChange={onChange}
                placeholder={'Mot de passe'}
                label={'Mot de passe'}
              />
            )}
            name="password"
            rules={{required: true}}
          />
        </View>
        <SendConnectionButton
          isLoading={isLoading}
          onPress={handleSubmit(handleOnSubmit, onError)}
          title={'Se connecter'}
        />
      </View>
    </SafeAreaView>
  );
}
