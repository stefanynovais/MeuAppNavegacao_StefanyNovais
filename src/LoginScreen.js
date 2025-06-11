import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try{
            const savedLogin = await AsyncStorage.getItem('userLogin');
            const savedSenha = await AsyncStorage.getItem('userSenha');

        if (login === savedLogin && senha === savedSenha) {
            navigation.replace('Home');
        } else {
            Alert.alert('Erro', 'Login ou senha incorretos!');
        }
    } catch (error) {
            Alert.alert('Erro', 'Falha ao acessar os dados de login!');
    }
    };
    return (

        <View style={styles.container}>
            <Image source={require('../assets/childhood.png')} style={styles.logo}/>

            <Text style={styles.welcome}>Bem-vindo ao App de Navegação</Text>
            <TextInput
                placeholder="Login"
                placeholderTextColor={'rgba(58, 7, 56, 0.66)'}
                value={login}
                onChangeText={setLogin}
                style={styles.input}
            />
            <TextInput
                placeholder="Senha"
                placeholderTextColor={'rgba(58, 7, 56, 0.66)'}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                style={styles.input}
            />
             <View style={styles.buttonContainer}>
             <Button title="Entrar" onPress={handleLogin}/>
             </View>

             <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.link}>Não tem uma conta? Crie uma!</Text>
      </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'rgba(247, 167, 243, 0.5)'
    },
    logo: {
        position: 'absolute',
        top: 40,
        left: 10,
        width: 90,
        height:90,
        resizeMode: 'contain'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 'bold',
        color: 'rgba(58, 7, 56, 0.66)',
        fontFamily: 'Poppins-Regular'
    },
    input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 8,
        borderRadius: 5,
        backgroundColor: 'rgba(247, 167, 243, 0.14)',
        borderColor: 'rgba(112, 39, 109, 0.5)'
    },
    buttonContainer: {
        backgroundColor: 'rgba(175, 79, 170, 0.5)',
        borderRadius: 8,
        paddingVertical: 10,
        elevation: 2
    },
    Text: {
        color: 'rgba(0, 0, 0, 0.5)'
    },
    link: {
    textAlign: 'center',
    color: 'blue',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
});