import React from 'react';
//forma de importar uma pagina
import Routes from './src/routes';
// @expo-google-fonts é a melhor forma para carregar fontes 
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';
// permite 
import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });
// enquanto as fontes não estiverem carregadas segurar na tela de espera
  if (!fontsLoaded)
    return <AppLoading/>
    
 return(
  <Routes />
  )
}
