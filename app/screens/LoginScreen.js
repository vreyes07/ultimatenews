import { View, Text, Image, StyleSheet, ImageBackground, TextInput, TouchableOpacity, Button} from 'react-native'
import { useState, useEffect } from 'react';
import {navigation} from '@react-navigation/stack';


export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [pasword, setPassword] = useState(null);


  
  return (
    <ImageBackground style = { styles.background } source = {require("../assets/background.jpg")}>
      <View style={ styles.container }>
        <Image style={ styles.logo } source={require("../assets/logo-red.png")}></Image>
        <TextInput style={ styles.input } placeholder="Nombre de usuario o correo electrónico" onChangeText={(username) => {setUsername(username)}} value={username}/>
        <TextInput style={ styles.input }  secureTextEntry={true} placeholder="Contraseña" onChangeText={(username) => {setUsername(username)}} value={pasword}/>
        <TouchableOpacity style={ styles.loginButton } onPress={() => navigation.navigate('News')}>
          <Text style={ styles.buttonText }>INICIAR SESION</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.registerButton } onPress={() => Alert.alert('Register button pressed')}>
          <Text style={ styles.buttonText }>REGISTRO</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center'
      },  
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        //width: '100%'
    },
    logo:{
        resizeMode: 'center'
    },
    loginButton: {
      height: 50,
      padding: 10,
      width: 200,
      borderRadius: 25,
      backgroundColor: '#4ecdc4',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      marginBottom: 15
    },
    registerButton: {
        height: 50,
        padding: 10,
        width: 200,
        borderRadius: 25,
        backgroundColor: '#fc5c65',
        alignItems: 'center',
      },
    input: {
        height: 50,
        width: 400,
        backgroundColor: '#fff',
        marginBottom: 25,
        borderRadius: 30,
        color: 'gray',
        padding: 10,
        fontStyle: 'italic'
      }
})