import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {Styles} from '../constants/Styles'

const TextField = (props) => {
  return (
    <View style={Styles.textFieldView}>
      <TextInput 
      onChangeText={props.OnChangeText}
      placeholderTextColor={"silver"}
      placeholder={props.Placeholder}
      cursorColor={"black"}
      secureTextEntry={props.SecureTextEntry}
      style={{
        marginLeft:20,
      }}/>
    </View>
  )
}

export default TextField