import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastroScreen({ navigation }) {

    //estados atuais 
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaFoco, setSenhaFoco] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);

    //lógica: armazenar e verificar se os dados foram preenchidos
    const handleCadastro = async () => {
        if (login && senha) {
            try {
                await AsyncStorage.setItem('userLogin', login);
                await AsyncStorage.setItem('userSenha', senha);
                Alert.alert('Cadastro realizado com sucesso!');
                navigation.navigate('Login');
            } catch (error) {
                Alert.alert('Erro', 'Não foi possível salvar os dados.'); //retorna o alert se houver algum erro ao salvar
            }
        } else {
            Alert.alert('Erro', 'Preencha todos os campos da tela!'); //se o usuario não preencheu todos os campos, aparece essa mensagem
        }
    };
    return (

        <View style={styles.container}>
            <Image source={require('../assets/childhood.png')} style={styles.logo} />
            <Text style={styles.welcome}>Cadastro</Text>

            <TextInput
                placeholder="Login"
                value={login}
                onChangeText={setLogin}
                style={styles.input}
            />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!senhaVisivel}
                    style={styles.inputComIcone}
                    placeholderTextColor="rgba(58, 7, 56, 0.66)"
                    onFocus={() => setSenhaFoco(true)} //o campo em foque significa que o usuário está com o input aberto
                    onBlur={() => setSenhaFoco(false)} //o blur indica que o usuário saiu do campo 
                />
                {(senhaFoco || senha.length > 0) && ( // o length pega o número de caracteres que uma string tem. Sendo assim, se length for maior que 0, o usuário já digitou alguma caracter, logo já pode aparecer o olhinho.
                    <TouchableOpacity
                        style={styles.iconeOlho}
                        onPress={() => setSenhaVisivel(!senhaVisivel)}
                    >
                        <Icon name={senhaVisivel ? "eye-off" : "eye"} size={20} color="#70376D" />
                    </TouchableOpacity>
                )}
            </View>
            
            <TouchableOpacity style={styles.estiloBotao} onPress={handleCadastro}>
                <Text style={styles.textoBotao}>Cadastrar</Text>
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
    inputContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    estiloBotao: {
        backgroundColor: 'rgba(175, 79, 170, 0.7)',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(58, 7, 56, 0.66)',
        borderStyle: 'solid'
    },
    textoBotao: {
        color: 'rgba(58, 7, 56, 0.66)',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular'
    },
    inputComIcone: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 8,
        paddingRight: 35,
        borderRadius: 5,
        backgroundColor: 'rgba(247, 167, 243, 0.14)',
        borderColor: 'rgba(112, 39, 109, 0.5)',
    },

    iconeOlho: {
        position: 'absolute',
        right: 10,
        top: 10,
    },

    Text: {
        color: 'rgba(0, 0, 0, 0.5)'
    },
});