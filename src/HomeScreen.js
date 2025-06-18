import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';


const windowWidth = Dimensions.get('window').width;


export default function HomeScreen({ navigation }) {
    const [pesquisa, setPesquisa] = useState('');

    //guardar os tipos de conteúdos do app no array dados, que possui 4 objetos
    const dados = [
        { id: '1', titulo: 'Barbie e o Castelo de Diamante' },
        { id: '2', titulo: 'Barbie em a Princesa e a Plebeia' },
        { id: '3', titulo: 'Barbie Moda e Magia' },
        { id: '4', titulo: 'Barbie Aventura nas Estrelas' },
    ];

    //essa função "filter" vai cria rum novo array com todos os itens do array original, que o dados. Então: esse includes, para cada texto, ou seja, a pesquisa que o usuário digitou, verifica se o item está contido no array.
    const resultados = dados.filter(item =>
        item.titulo.toLowerCase().includes(pesquisa.toLowerCase())
    );
    return (

        <View style={styles.container}>
            <Image source={require('../assets/childhood.png')} style={styles.logo} />
            <TextInput
                placeholder="Digite aqui..."
                placeholderTextColor="rgba(58, 7, 56, 0.66)"
                value={pesquisa}
                onChangeText={setPesquisa}
                style={styles.input}
            />
            <Text style={styles.title}>Seja Bem-vindo ao App da Barbie! ✨</Text>

            {pesquisa !== '' ? (
                <FlatList
                    data={resultados}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.item}
                            onPress={() => {
                                if (!item.titulo) {
                                    console.warn('Título não definido para o item:', item);
                                    return;
                                }
                                navigation.navigate('Details', {
                                    titulo: item.titulo,
                                });

                            }}
                        >
                            <Text style={styles.textoItem}>{item.titulo}</Text>
                        </TouchableOpacity>
                    )}
                    contentContainerStyle={styles.listContainer}

                />
            ) : null}
        </View>

    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: 'rgba(247, 167, 243, 0.5)',

    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 120,
        backgroundColor: 'rgba(247, 167, 243, 0.5)'
    },
    title: {
        fontSize: 12,
        marginTop: 165,
        color: 'rgba(58, 7, 56, 0.66)',
        fontWeight: '600',
        textAlign: 'center',
        fontFamily: 'Poppins-Regular'
    },
    logo: {
        position: 'absolute',
        top: 20,
        left: 20,
        width: 80,
        height: 80,
        resizeMode: 'contain',
        zIndex: 1,
    },
    estiloBotao: {
        backgroundColor: 'rgba(175, 79, 170, 0.7)',
        padding: 12,
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 5,
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
    item: {
        backgroundColor: 'rgba(175, 79, 170, 0.2)',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#70376D',
        width: windowWidth * 0.9,
        marginTop: 1,

    },
    textoItem: {
        fontSize: 16,
        color: '#70376D',
        fontWeight: 'bold',
        fontFamily: 'Poppins-Regular'
    },
    input: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: 'rgba(112, 39, 109, 0.5)',
        backgroundColor: 'rgba(247, 167, 243, 0.14)',
        borderRadius: 8,
        paddingHorizontal: 15,
        color: '#70376D',
        height: 45,
        width: '60%',
        marginBottom: 35,
        marginTop: 40,
        marginLeft: 105,
        paddingLeft: 12,
    },

});