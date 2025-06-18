import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RecuperarSenhaScreen({ navigation }) {

    const [novaSenha, setNovaSenha] = useState(''); //estado local para armazenar a nova senha digitada
    const [senhaFoco, setSenhaFoco] = useState(false);
    const [senhaVisivel, setSenhaVisivel] = useState(false);



    const handlesalvarNovaSenha = async () => { //função que salva a nova senha no assync storage
        if (!novaSenha.trim()){ //verificando se o campo está vazio
            Alert.alert('Erro', 'Digite uma nova senha.');
            return;
        }
        try {
            // lógica para salvar a nova senha
            await AsyncStorage.setItem('userSenha', novaSenha);

            Alert.alert('Senha redefinida com sucesso!');

            //voltar para a tela anterior
            navigation.goBack();

        } catch(error) { //alerta se der algum erro ao salvar
            Alert.alert('Erro!', 'Não foi possível salvar a nova senha.')
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/childhood.png')} style={styles.logo} />

            <Text style={styles.welcome}>Recuperar Senha</Text>
              <View style={styles.inputContainer}>
            <TextInput
                placeholder="Digite a nova senha"
                value={novaSenha}
                onChangeText={setNovaSenha}
                secureTextEntry //ocultar a senha, deixar com aquelas bolinhas pretas
                style={styles.input}
                placeholderTextColor="rgba(58, 7, 56, 0.6)"
                onFocus={() => setSenhaFoco(true)} //o campo em foque significa que o usuário está com o input aberto
                onBlur={() => setSenhaFoco(false)} //o blur indica que o usuário saiu do campo 
            />
              {(senhaFoco || senha.length > 0) && ( // o length pega o número de caracteres que uma string tem. Sendo assim, se length for maior que 0, o usuário já digitou alguma caracter, logo já pode aparecer o olhinho.
                                <TouchableOpacity
                                    style={styles.iconeOlho}
                                    onPress={() => setSenhaVisivel(!senhaVisivel)} //alterna a visibilidade da senha, como se fosse um boolean
                                >
                                    <Icon name={senhaVisivel ? "eye-off" : "eye"} size={20} color="#70376D" /> {/*Aqui é como se fosse uma forma mais curta para se escrever um if/else. O ? testa uma condição e decide qual valor retornar. */}
                                </TouchableOpacity>
                            )}  
                            </View>   
            <TouchableOpacity style={styles.botao} onPress={handlesalvarNovaSenha}>
                <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>

        </View>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(247, 167, 243, 0.3)', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
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
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'rgba(112, 39, 109, 0.5)',
    backgroundColor: 'rgba(247, 167, 243, 0.14)',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20
  },
  inputContainer: {
        position: 'relative',
        marginBottom: 20,
    },
    inputComIcone: {
        height: 40,
        borderWidth: 1,
        padding: 8,
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
  botao: {
    backgroundColor: 'rgba(175, 79, 170, 0.7)',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#70376D', 
    alignItems: 'center',
    width: '100%'
  },
  textoBotao: {
    color: '#fff', 
    fontWeight: 'bold',
    fontSize: 16
  }
});