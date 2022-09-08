import {View, Input} from 'native-base';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {connectionFormStyles} from './ConnectionForm.styles';
import {ConnectionFormProps} from './ConnectionForm.type';

const ConnectionForm = ({
  label,
  placeholder,
  onChange,
  secureTextEntry = false,
}: ConnectionFormProps) => {
  // @ts-ignore
  return (
    <View>
      <VroomText
        style={{marginTop: 20}}
        styleText={styles.titleH3}
        title={label}
      />
      <Input
        autoCapitalize="none"
        variant={'underlined'}
        secureTextEntry={secureTextEntry}
        style={connectionFormStyles.formInput}
        onChangeText={val => onChange(val)}
        placeholder={placeholder}
      />
    </View>
  );
};

export default ConnectionForm;
