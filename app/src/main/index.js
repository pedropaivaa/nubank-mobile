import { registerRootComponent } from 'expo';
import React from 'react'; // Precisamos do React
import { SafeAreaProvider } from 'react-native-safe-area-context';

// --- 1. Importe TODAS as suas telas ---
// (Os caminhos são da raiz para dentro da pasta 'app')
import paginaInicial from './src/screens/paginaInicial';
import paginaDentro from './src/screens/paginaDentro';
import longinScreen from './src/screens/longinScreen'; // Eu vi que você também tem esta tela

// --- 2. ESCOLHA QUAL TELA VOCÊ QUER VER ---
// Mude esta linha para a tela que você quer testar agora:

const TelaParaMostrar = paginaInicial; 
//const TelaParaMostrar = paginaDentro;
// const TelaParaMostrar = longinScreen;


// --- 3. Crie um Componente "Mestre" ---
// (Ele vai carregar a tela que você escolheu acima e 
//  colocar o 'SafeAreaProvider' em volta dela)
function AppMestre() {
  return (
    <SafeAreaProvider>
      <TelaParaMostrar />
    </SafeAreaProvider>
  );
}

// --- 4. Registre o App (APENAS UMA VEZ) ---
// O app vai rodar o 'AppMestre', que vai mostrar a tela que você escolheu.
registerRootComponent(AppMestre);