import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Avatar, Button, Card, Divider, List, Paragraph, Title } from 'react-native-paper';
import AtoresDetalhes from './src/screens/atores/AtoresDetalhes';
import FilmesDetalhes from './src/screens/filmes/FilmesDetalhes';
import FilmesPopulares from './src/screens/filmes/FilmesPopulares';
import Home from './src/screens/Home';
import Pagina1 from './src/screens/Pagina1';
import Pagina2 from './src/screens/Pagina2';

const Stack = createNativeStackNavigator();

export default function App(props) {


  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="filmes/populares">
          <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }}/>
          <Stack.Screen name="P1" component={Pagina1} options={{ title: 'Página 1' }}/>
          <Stack.Screen name="P2" component={Pagina2} options={{ title: 'Página 2' }}/>
          <Stack.Screen name="filmes/populares" component={FilmesPopulares} options={{ title: 'Filmes Populares' }}/>
          <Stack.Screen name="filmes/detalhes" component={FilmesDetalhes} options={{ title: 'Filmes Detalhes' }}/>
          <Stack.Screen name="atores/detalhes" component={AtoresDetalhes} options={{ title: 'Atores Detalhes' }}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
}

