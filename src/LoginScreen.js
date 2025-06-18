import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {

    //estados atuais 
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaFoco, setSenhaFoco] = useState(false);
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [loading, setLoading] = useState(false); //loading do botão começa com falso, assim como a senha foco e a senha visivel

//função chamada ao clicar em "entrar"
    const handleLogin = async () => {
        //verificando se o usuário preencheu o dados
         if (!login || !senha) {
      Alert.alert('Erro', 'Por favor, preencha login e senha.');
      return;
    }
    setLoading(true); // começa o loading
        try {
            const savedLogin = await AsyncStorage.getItem('userLogin'); //o await diz como: "faça isso aqui antes de continuar"
            
            //os gets são para buscar o login e senhas salvos
            const savedSenha = await AsyncStorage.getItem('userSenha');

            if (login === savedLogin && senha === savedSenha) { //comparando ao que foi digitado pelo usuário, se estiver igual, redireciona ao drawer
                navigation.replace('MainApp');
            } else {
                Alert.alert('Erro', 'Login ou senha incorretos!'); //se não estiver igual, retorna esse alert de erro
            }
        } catch (error) {
            Alert.alert('Erro', 'Falha ao acessar os dados de login!'); //alerta de falha ao tentar verificar os dados
        }
         setLoading(false); //loading pode parar
    };
    return (

        <View style={styles.container}>
            <Image source={require('../assets/childhood.png')} style={styles.logo} />

            <Text style={styles.welcome}>Bem-vindo ao App de Navegação</Text>
            <TextInput
                placeholder="Login"
                placeholderTextColor={'rgba(58, 7, 56, 0.66)'}
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
                        onPress={() => setSenhaVisivel(!senhaVisivel)} //alterna a visibilidade da senha, como se fosse um boolean
                    >
                        <Icon name={senhaVisivel ? "eye-off" : "eye"} size={20} color="#70376D" /> {/*Aqui é como se fosse uma forma mais curta para se escrever um if/else. O ? testa uma condição e decide qual valor retornar. */}
                    </TouchableOpacity>
                )}                         
            </View>
            
                 {senhaFoco && (
        <TouchableOpacity onPress={() => navigation.navigate('RecuperarSenha')}>
          <Text style={styles.recuperarSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      )}

            {/*Optei por usar esse touchable opacity porque ele é menos limitado que um "button", para ser utilizado*/}
            <TouchableOpacity style={styles.estiloBotao} onPress={handleLogin} disabled={loading} >
                <Text style={styles.textoBotao}>{loading ? 'Entrando...' : 'Entrar'}</Text>
            </TouchableOpacity>

            {/*Link para ir até a tela de cadastro, caso o usuário não tenha um*/}
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
    Text: {
        color: 'rgba(0, 0, 0, 0.5)'
    },
    link: {
        textAlign: 'center',
        color: 'blue',
        marginTop: 10,
        textDecorationLine: 'underline',
    },
    recuperarSenha: {
    textAlign: 'right',
    color: 'blue',
    marginTop: 5,
    marginBottom: 15,
    marginRight: 5,
    textDecorationLine: 'underline',
    fontSize: 13,
    fontStyle: 'italic',
  },
});