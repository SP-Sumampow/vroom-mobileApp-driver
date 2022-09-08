import {View, Input, useToast, Box} from 'native-base';
import React, {useContext, useEffect} from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {subscriptionFormStyles} from './SubscriptionForm.styles';
import {useForm, Controller, SubmitErrorHandler} from 'react-hook-form';

// @ts-ignore
import NameIcon from '../../../../assets/svg/name-icon.svg';
// @ts-ignore
import EmailIcon from '../../../../assets/svg/email-icon.svg';
// @ts-ignore
import PhoneNumberIncon from '../../../../assets/svg/phoneNumber-icon.svg';
import SendSubscriptionButton from '../Button/sendSubscriptionButton/sendSubscriptionButton';

import {colors} from '../../../global/theme/colors';
import {useTranslation} from 'react-i18next';
import {userProvider} from '../../../../providers/User/UserProvider';
import {SignUpInputs, SubscriptionFormProps} from './SubscriptionForm.type';

const SubscriptionForm = ({onSubmit, isLoading}: SubscriptionFormProps) => {
  const {t} = useTranslation();
  const {test} = useContext(userProvider);
  const {control, handleSubmit} = useForm<SignUpInputs>();
  const toast = useToast();

  useEffect(() => {
    console.log(test);
  }, [test]);

  const onError: SubmitErrorHandler<SignUpInputs> = errors => {
    const val = [
      errors.firstName,
      errors.lastName,
      errors.password,
      errors.email,
      errors.phone,
    ].find(input => input?.ref !== undefined);

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

  // @ts-ignore
  return (
    <>
      <View style={subscriptionFormStyles.allInput}>
        <View style={subscriptionFormStyles.formInput}>
          <VroomText
            style={{marginTop: 20}}
            styleText={styles.titleH3}
            title={'Nom'}
          />
          <View>
            <NameIcon />
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <Input
                  variant={'underlined'}
                  placeholder={'Votre nom ici'}
                  onChangeText={val => onChange(val)}
                />
              )}
              name="lastName"
              rules={{required: true}}
            />
          </View>
        </View>
        <View style={subscriptionFormStyles.formInput}>
          <VroomText
            style={{marginTop: 20}}
            styleText={styles.titleH3}
            title={'Prénom'}
          />
          <View>
            <NameIcon />
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <Input
                  variant={'underlined'}
                  placeholder={'Votre prénom ici'}
                  onChangeText={val => onChange(val)}
                />
              )}
              name="firstName"
              rules={{required: true}}
            />
          </View>
        </View>
        <View style={subscriptionFormStyles.formInput}>
          <VroomText
            style={{marginTop: 20}}
            styleText={styles.titleH3}
            title={'Password'}
          />
          <View style={subscriptionFormStyles.formInput}>
            <NameIcon />
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <Input
                  autoCapitalize="none"
                  variant={'underlined'}
                  placeholder={'Votre mot de passe'}
                  secureTextEntry
                  onChangeText={val => onChange(val)}
                />
              )}
              name="password"
              rules={{required: true}}
            />
          </View>
        </View>
        <View style={subscriptionFormStyles.formInput}>
          <VroomText
            style={{marginTop: 20}}
            styleText={styles.titleH3}
            title={'Email'}
          />
          <View style={subscriptionFormStyles.formInput}>
            <EmailIcon />
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <Input
                  autoCapitalize="none"
                  variant={'underlined'}
                  placeholder={'Votre e-mail ici'}
                  onChangeText={val => onChange(val)}
                />
              )}
              name="email"
              rules={{required: true}}
            />
          </View>
        </View>
        <View style={subscriptionFormStyles.formInput}>
          <VroomText
            style={{marginTop: 20}}
            styleText={styles.titleH3}
            title={'Numéro de téléphone'}
          />
          <View>
            <PhoneNumberIncon />
            <Controller
              control={control}
              render={({field: {onChange}}) => (
                <Input
                  autoCapitalize="none"
                  variant={'underlined'}
                  placeholder={'Votre numéro ici'}
                  onChangeText={val => onChange(val)}
                />
              )}
              name="phone"
              rules={{required: true}}
            />
          </View>
        </View>
      </View>
      <SendSubscriptionButton
        isLoading={isLoading}
        onPress={handleSubmit(onSubmit, onError)}
        title={'S’inscrire'}
      />
    </>
  );
};

export default SubscriptionForm;
