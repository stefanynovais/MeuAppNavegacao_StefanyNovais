import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function DetailsScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/childhood3.png')} style={styles.logo} />
            <Text style={styles.title}>Details Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Home"
                    onPress={() => navigation.navigate('Home')}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Profile"
                    onPress={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faf0e6', // Cor de fundo da tela
    },
    logo: {
        position: 'absolute',
        top: 40,
        left: 140,
        width: 90,
        height:90,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#ffebcd', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
});