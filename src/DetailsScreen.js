import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity, ScrollView } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation, route }) {
const { params = {} } = route || {};
const { titulo = 'Título não disponível' } = params;


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
              <Text style={styles.titulo}>{titulo}</Text>
            <Image source={require('../assets/childhood.png')} style={styles.logo} />
              <Text style={styles.texto}>
        Aqui estão os detalhes incríveis sobre "{titulo}" no mundo encantado da Barbie! ✨
      </Text>
          
                <TouchableOpacity style={styles.estiloBotao} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.textoBotao}>Go to Profile</Text>
                </TouchableOpacity>
           
        </View>
           </ScrollView>
    );
}

const styles = StyleSheet.create({
   scrollContainer: {
        flexGrow: 1,
    },
    container: {
       flex: 1,
        backgroundColor: 'rgba(247, 167, 243, 0.5)',
        padding: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
    fontSize: 24,
        fontWeight: 'bold',
        color: '#70376D',
        marginVertical: 20,
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
  },
    logo: {
       width: Math.min(windowWidth * 0.8, 200),
    height: Math.min(windowWidth * 0.8, 200),
    marginVertical: 20,
    },
    texto: {
     fontSize: 18,
        color: '#70376D',
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 24,
  },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'rgba(58, 7, 56, 0.66)'
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
});