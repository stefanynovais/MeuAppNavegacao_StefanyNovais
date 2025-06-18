import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';

import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import ProfileScreen from './src/ProfileScreen';
import CadastroScreen from './src/CadastroScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecuperarSenhaScreen from './src/RecuperarSenhaScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) { //props são as propriedades (dados que você passa para um componente). Essa função aqui vai devolver o conteudo customizado
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} /> {/*Mostra as opções de início e perfil*/}
            <DrawerItem // aqui começa o botão de sair
                label="Sair"
                labelStyle={{ color: '#70376D' }}
                onPress={async () => {
                    await AsyncStorage.clear(); //limpa os dados salvos
                    Alert.alert("Logout", "Você saiu do app.");
                    props.navigation.replace('Login'); //redireciona para a tela de login
                }}
            />
        </DrawerContentScrollView>


    );
}

//aqui já é a função para abrir o drawer
function AppDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerStyle: { backgroundColor: '#F7A7F3' },
                headerStyle: { backgroundColor: '#F7A7F3' },
                headerTintColor: '#70376D',
            }}
        >
            <Drawer.Screen name="Início" component={HomeScreen} />
            <Drawer.Screen name="Perfil" component={ProfileScreen} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Cadastro"
                    component={CadastroScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="Details" component={DetailsScreen} options={({ route }) => ({
                    title: route.params?.titulo || 'Detalhes',
                    headerBackTitle: 'Voltar'
                })}></Stack.Screen>
                <Stack.Screen name="Profile" component={ProfileScreen}></Stack.Screen>
                <Stack.Screen name="RecuperarSenha" component={RecuperarSenhaScreen} options={{ headerShown: false }}></Stack.Screen>
                <Stack.Screen name="MainApp" component={AppDrawer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}