import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../constants/style';

const nickname = 'Esa';

const HomeScreen = () => {
  return (
    <View className={`${styles.section}`}>
      <Text className="text-[35px] font-bold">Hello {nickname}</Text>
    </View>
  );
};

export default HomeScreen;
