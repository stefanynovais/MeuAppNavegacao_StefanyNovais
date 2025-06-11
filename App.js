import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import ProfileScreen from './src/ProfileScreen';
import CadastroScreen from './src/CadastroScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Cadastro" component={CadastroScreen}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerBackVisible: false }}></Stack.Screen>
                <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
                <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}