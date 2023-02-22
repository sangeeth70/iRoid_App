import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from './src/screens/Splash';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './src/screens/Profile';
import Meals from './src/screens/Meals';
import More from './src/screens/More';
import { Image } from 'react-native';
import Images from './src/constants/Images';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomeStack' component={HomeStack}/>
        <Stack.Screen name='BottomTab' component={BottomTab}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

function HomeStack (){
  return(
 <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Splash' component={Splash}/>
    <Stack.Screen name='Login' component={Login}/>
</Stack.Navigator> 
  )
}

function BottomTab(){
  return(
    // <NavigationContainer>
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="MainHome" component={Home} options={{
        tabBarIcon:((focused)=>
        <Image
          source={Images.home}
        />
        )
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon:((focused)=>
        <Image
          source={Images.profile}
        />
        )
      }}/>
      <Tab.Screen name="Meals" component={Meals} options={{
        tabBarIcon:((focused)=>
        <Image
          source={Images.meal}
        />
        )
      }}/>
      <Tab.Screen name="More" component={More} options={{
        tabBarIcon:((focused)=>
        <Image
          source={Images.more}
        />
        )
      }}/>
    </Tab.Navigator>
  // </NavigationContainer>
  )
}


