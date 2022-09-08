import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import VroomText from '../../../global/Components/Text/VroomText';
import {styles} from '../../../global/Components/Text/VroomText.styles';
import {MenuListProps} from './MenuList.type';

const MenuList = ({
  onMyAccount,
  onChildren,
  onPayment,
  onNeedHelp,
}: MenuListProps) => {
  return (
    <View>
      <View>
        <TouchableOpacity onPress={onMyAccount}>
          <VroomText
            style={{marginVertical: 20}}
            styleText={styles.titleH2}
            title={'Mon Compte'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onChildren}>
          <VroomText
            style={{marginVertical: 20}}
            styleText={styles.titleH2}
            title={'Enfant(s)'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onPayment}>
          <VroomText
            style={{marginVertical: 20}}
            styleText={styles.titleH2}
            title={'Paiement'}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={onNeedHelp}>
          <VroomText
            style={{marginVertical: 20}}
            styleText={styles.titleH2}
            title={'Besoin d’aide ?'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuList;
