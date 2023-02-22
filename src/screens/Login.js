import { View, Text, SafeAreaView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import {Styles} from '../constants/Styles';
import TextField from '../components/TextField';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import axios from '../Axios/axios'
import { BASE_URL, LOGIN } from '../constants/NetworkConstants';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const navigation = useNavigation();
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const SignIn = async() =>{
        const params = new FormData();
        params.append('email',username)
        params.append('password',password) 
        params.append('lang_id','en') 
        params.append('device_token','sss') 
        axios({
            method:'POST',
            url: BASE_URL+LOGIN,
            data: params,
                 headers:{
                    "Content-Type": "application/json" 
            },
          })
            .then(response => {
            console.log('res==>>',response.status)
            if(response.status == 200){
                console.log("Login Success")
                navigation.navigate("Home")
            } else {
                console.log("Error")
            }
            })
            .catch(error => {
              console.log('login error>>>>>>', error);
            });
    }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
    <View style={Styles.loginView}>
    <ScrollView>
        <View style={Styles.loginTopView}>
        <TouchableOpacity 
            onPress={()=>{
                navigation.navigate("BottomTab")
            }}>
                <Text style={{fontSize:16,color:"black",fontWeight:"700",}}>Skip</Text>
        </TouchableOpacity>
        </View>
        <View style={Styles.loginMainView}>
            <View style={Styles.SignInView}>
                <Text style={{fontSize:32,fontWeight:"900",color:"black"}}>Sign In</Text>
            </View>
            <View style={Styles.SignInSubView}>
                <Text style={{fontSize:18,color:"grey"}}>Enter Your Details</Text>
            </View>
            <TextField
            OnChangeText={(text)=>{
                setUsername(text)
            }}
            Placeholder='User Name'
            SecureTextEntry={false}
            />
            <TextField
            OnChangeText={(text)=>{
                setPassword(text)
            }}
            Placeholder='Password'
            SecureTextEntry={true}
            />
            <LoginButton
            onPress={()=>{
                console.log(username,password);
                SignIn();
                // navigation.navigate("Home")
            }}
            />
            <TouchableOpacity 
            style={{
                alignSelf:"center",
                marginTop:40,
            }}
            onPress={()=>{
                console.log("sdsd");
            }}>
                <Text style={{fontSize:18,color:"black",fontWeight:"600",}}>Forgot your password?</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",justifyContent:"center",marginTop:20}}>
            <Text style={{fontSize:16,color:"black",}}>Don't Have an Account?</Text>
            <TouchableOpacity 
            style={{
                alignSelf:"center",
                marginLeft:10,
            }}
            onPress={()=>{
                console.log("sdsd");
            }}>
                <Text style={{fontSize:16,color:'rgba(93, 167, 163, 1)',fontWeight:"600",}}>Sign Up</Text>
        </TouchableOpacity>
        </View>
        </View>
        </ScrollView>
    </View>
    </SafeAreaView>
  )
}

const LoginButton = (props) =>{
    return(
        <TouchableOpacity style={Styles.loginButton}
        onPress={props.onPress}
        > 
            <Text style={{color:"white",fontSize:18}}>Sign In</Text>
        </TouchableOpacity>
    )
}

export default Login