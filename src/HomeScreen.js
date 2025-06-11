import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image} from 'react-native';


const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/infancia.png')} style={styles.logo} />
            <Text style={styles.title}>Home Screen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('Details')}
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
        backgroundColor: 'rgba(168, 172, 204, 0.66)' // Cor de fundo da tela
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
         color:'rgba(35, 84, 139, 0.66)'
    },
     logo: {
        position: 'absolute',
        top: 40,
        left: 140,
        width: 90,
        height:90,
        resizeMode: 'contain'
    },
    buttonContainer: {
        backgroundColor: 'rgba(58, 7, 56, 0.66)', // Cor de fundo do container do botão
        margin: 10,
        width: windowWidth * 0.5, // 50% da largura da tela
        borderRadius: 5,
    },
});