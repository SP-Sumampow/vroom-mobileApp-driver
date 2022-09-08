import {View, Input} from 'native-base';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {searchDestinationStyles} from './SearchDestination.styles';
import {SearchDestinationProps} from './SearchDestination.type';

const SearchDestination = ({label, placeholder}: SearchDestinationProps) => {
  // @ts-ignore
  // @ts-ignore
  return (
    <View style={{width: '90%'}}>
      <VroomText
        style={{marginTop: 20}}
        styleText={styles.titleH3}
        title={label}
      />
      <Input
        variant={'underlined'}
        style={searchDestinationStyles.formInput}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchDestination;
