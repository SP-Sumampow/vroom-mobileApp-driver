import {Text, View} from 'react-native';
import React from 'react';
import {AddressDestinationFormProps} from './AddressDestinationForm.types';
import Style from '../../screen/HomePageScreen.styles';
import {Controller, SubmitErrorHandler, useForm} from 'react-hook-form';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {Box, Button, Input, useToast} from 'native-base';
import {connectionFormStyles} from '../../../connection/components/Form/ConnectionForm.styles';
import {SearchDestinationInfoInputs} from '../../screen/HomePageScreen.types';
import {colors} from '../../../global/theme/colors';
import {t} from 'i18next';

const AddressDestinationForm = ({
  style,
  onDestinationSearchSubmit,
}: AddressDestinationFormProps) => {
  // Hooks
  const {control, handleSubmit} = useForm<SearchDestinationInfoInputs>();
  const toast = useToast();

  const onError: SubmitErrorHandler<SearchDestinationInfoInputs> = errors => {
    const val = [errors.startAddress, errors.endAddress].find(
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

  return (
    <View style={[Style.formAddressContainer, style]}>
      <Controller
        control={control}
        render={({field: {onChange}}) => (
          <View>
            <VroomText
              style={{marginTop: 20}}
              styleText={styles.titleH3}
              title={'Start address'}
            />
            <Input
              autoCapitalize="none"
              variant={'underlined'}
              style={connectionFormStyles.formInput}
              onChangeText={val => onChange(val)}
              placeholder="9 rue marcel sembat 93100 montreuil"
            />
          </View>
        )}
        name="startAddress"
        rules={{required: true}}
      />
      <Controller
        control={control}
        render={({field: {onChange}}) => (
          <View>
            <VroomText
              style={{marginTop: 20}}
              styleText={styles.titleH3}
              title={'End address'}
            />
            <Input
              autoCapitalize="none"
              variant={'underlined'}
              style={connectionFormStyles.formInput}
              onChangeText={val => onChange(val)}
              placeholder="10 Rue du Progrès, 93100 Montreuil"
            />
          </View>
        )}
        name="endAddress"
        rules={{required: true}}
      />
      <Button
        style={Style.formAddressButton}
        onPress={handleSubmit(onDestinationSearchSubmit, onError)}>
        <Text style={Style.formAdressButtonText}>Submit</Text>
      </Button>
    </View>
  );
};

export default AddressDestinationForm;
