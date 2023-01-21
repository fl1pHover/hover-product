import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Button, View } from 'react-native';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const PlaceHome = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default PlaceHome;
