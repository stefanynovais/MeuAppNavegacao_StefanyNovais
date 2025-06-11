import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleCadastro = async () => {
        if (login && senha) {
            try {
                await AsyncStorage.setItem('userLogin', login);
                await AsyncStorage.setItem('userSenha', senha);
                Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível salvar os dados.');
            }
        } else {
            Alert.alert('Erro', 'Preencha todos os campos da tela!');
        }
    };
    return (

        <View style={styles.container}>
            <Image source={require('../assets/childhood.png')} style={styles.logo}/>
            
            <Text style={styles.title}>Cadastro</Text>
            <TextInput
                placeholder="Novo login"
                value={login}
                onChangeText={setLogin}
                style={styles.input}
            />
            <TextInput
                placeholder="Nova senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                style={styles.input}
            />
            <View style={styles.buttonContainer}>
                <Button title="Cadastrar" onPress={handleCadastro} />
            </View>
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
        height: 90,
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
});