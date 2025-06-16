import React from 'react';
import { View, Text, Button, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';


const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/childhood.png')} style={styles.logo} />
            <Text style={styles.title}>Home Screen</Text>
            <View>
                <TouchableOpacity style={styles.estiloBotao} onPress={() => navigation.navigate('Details')}>
                    <Text style={styles.textoBotao}>Go to Details</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.estiloBotao} onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.textoBotao}>Go to Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(247, 167, 243, 0.5)'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        color: 'rgba(58, 7, 56, 0.66)'
    },
    logo: {
        position: 'absolute',
        top: 50,
        left: 140,
        width: 90,
        height: 90,
        resizeMode: 'contain'
    },
    estiloBotao: {
        backgroundColor: 'rgba(175, 79, 170, 0.7)',
        padding: 12,
        borderRadius: 8,
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