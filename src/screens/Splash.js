import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React, { useEffect } from 'react'
import {Styles} from '../constants/Styles'
import { useNavigation } from '@react-navigation/native'
import Images from '../constants/Images'
// const Navigation = useNavigation();
const Splash = ({navigation}) => {
useEffect(()=>{
    setTimeout(() => {
        navigation.navigate('Login');
        },4000);
},[]);
  return (
    <SafeAreaView style={Styles.mainView}>
        <ImageBackground
        resizeMode='stretch'
        style={[Styles.splashImgView]}
        source={require('../assets/splash.jpg')}>
            <Text style={{fontSize:26,fontWeight:"900",color:"black",letterSpacing:3}}>IROID</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Splash