import {View} from 'native-base';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {AccountInfoDetailsProps} from './AccountInfoDetails.type';

const AccountInfoDetails = ({
  infoType,
  infoTypeValue,
}: AccountInfoDetailsProps) => {
  return (
    <View>
      <VroomText title={infoType} styleText={styles.titleH2} />
      <VroomText title={infoTypeValue} styleText={styles.titleH2} />
    </View>
  );
};

export default AccountInfoDetails;
