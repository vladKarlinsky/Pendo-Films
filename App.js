import React from 'react';
import { MainScreen } from './components/MainScreen';
import { MovieScreen } from './components/MovieScreen';
import { SearchScreen } from './components/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton } from 'react-native-paper';

/*

Configuration of navigation between screens 
is set up in the following way:

Root/
├─ HomeStackScreen/
│  ├─ MainScreen
│  ├─ MovieScreen
├─ SearchScreen/

*/


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const options = {
  headerStyle: {
    backgroundColor: '#2f3641',
  },
  headerTitleAlign: 'center',
  headerTintColor: '#ec2059',
}


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
       name="Pendo Films"
       component={MainScreen}
       options={options} />
      <HomeStack.Screen 
       name="Movie Screen"
       component={MovieScreen}
       options={options} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator       
       screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home'
            } else if (route.name === 'Search') {
              iconName = 'magnify';
            }
            return <IconButton icon={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#ec2059',
          tabBarInactiveTintColor: 'grey',
        })}
        >
        <Tab.Screen 
         name="Home"
         component={HomeStackScreen}
         options={{headerShown: false}}
         />
        <Tab.Screen 
         name="Search" 
         component={SearchScreen}
         options={options} />
      </Tab.Navigator>
    </NavigationContainer>
    );
  }
