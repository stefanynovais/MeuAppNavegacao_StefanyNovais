import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation, route }) {
const { titulo } = route.params;

    return (
        <View style={styles.container}>
              <Text style={styles.titulo}>{titulo}</Text>
            <Image source={require('../assets/childhood.png')} style={styles.logo} />
              <Text style={styles.texto}>
        Aqui estão os detalhes incríveis sobre "{titulo}" no mundo encantado da Barbie! ✨
      </Text>
            
                <TouchableOpacity style={styles.estiloBotao} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.textoBotao}>Go to Home</Text>
                </TouchableOpacity>
         
          
                <TouchableOpacity style={styles.estiloBotao} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.textoBotao}>Go to Profile</Text>
                </TouchableOpacity>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    backgroundColor: 'rgba(247, 167, 243, 0.5)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    },
    titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#70376D',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
    logo: {
       width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
    },
      texto: {
    fontSize: 16,
    color: '#70376D',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 30,
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