import {TouchableOpacity, View} from 'react-native';
import React from 'react';
// @ts-ignore
import MenuIcon from '../../../../assets/svg/menu.svg';
// @ts-ignore
import MessageIcon from '../../../../assets/svg/message-icon.svg';
import {HomeMenuProps} from './Menu.type';

const HomeMenu = ({onMenuPress, onNotificationPress}: HomeMenuProps) => {
  return (
    <View
      style={{
        width: '90%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TouchableOpacity onPress={onMenuPress}>
        <MenuIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={onNotificationPress}>
        <MessageIcon />
      </TouchableOpacity>
    </View>
  );
};

export default HomeMenu;
