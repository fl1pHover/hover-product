import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../constants/style';

const CustomDrawer = (props) => {
  return (
    <View
      className="flex flex-1 py-7"
      style={{ backgroundColor: colors.darkBlue }}
    >
      <DrawerContentScrollView {...props}>
        <View className="px-5 my-5">
          <Image
            source={require('../assets/images/avatar.png')}
            className="w-24 h-24 my-5"
          />
          <Text className="text-white text-custom">Эрдэмсайхан</Text>
        </View>

        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View className="px-5">
        <TouchableOpacity>
          <Text className="text-white">Гарах</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
