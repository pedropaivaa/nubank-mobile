import { registerRootComponent } from 'expo';
import React from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import paginaInicial from '../screens/paginaInicial';
import App from '../screens/paginaDentro';
import longinScreen from '../screens/longinScreen'; // Eu vi que você também tem esta tela

// sdfruhuihsfsdnfisjf

const TelaParaMostrar = paginaInicial; 
//const TelaParaMostrar = App;
//const TelaParaMostrar = longinScreen;



function AppMestre() {
  return (
    <SafeAreaProvider>
      <TelaParaMostrar />
    </SafeAreaProvider>
  );
}


registerRootComponent(AppMestre);