import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Button, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CustomDrawer from './components/CustomDrawer';
import { colors } from './constants/style';
import PlaceHome from './screens/PlaceHome';

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="DummyHome"
        screenOptions={{
          drawerActiveTintColor: colors.white,
          drawerInactiveTintColor: colors.white,
          drawerActiveBackgroundColor: '#192841',
          drawerLabelStyle: {
            marginLeft: -15,
            fontSize: 15,
          },
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen
          name=" "
          options={{
            title: 'Нүүр',
            headerStyle: {
              backgroundColor: 'tranparent',
            },
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
          component={PlaceHome}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            title: 'asd',
            headerStyle: {
              backgroundColor: 'tranparent',
            },
            drawerIcon: ({ color }) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
