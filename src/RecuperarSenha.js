import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {

    const [novaSenha, setNovaSenha] = useState(''); //estado local para armazenar a nova senha digitada



    const handlesalvarNovaSenha = async () => { //função que salva a nova senha no assync storage
        if (!novaSenha.trim()){
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
            <TextInput
                placeholder="Digite a nova senha"
                value={novaSenha}
                onChangeText={setNovaSenha}
                secureTextEntry //ocultar a senha, deixar com aquelas bolinhas pretas
                style={styles.input}
                placeholderTextColor="rgba(58, 7, 56, 0.6)"
            />

            <TouchableOpacity onPress={() => ('handleSalvarNovaSenha')}>
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