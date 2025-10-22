import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

// 1. IMPORTAÇÕES PARA FUNCIONAR
import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
// 2. IMPORTAÇÃO DOS NOVOS ÍCONES (react-native-feather)
import {
  User,
  Eye,
  EyeOff,
  HelpCircle,
  Mail,
  DollarSign,
  BarChart2,
  ArrowUpCircle,
  CreditCard,
  Home,
  ShoppingBag,
  Settings,
} from 'react-native-feather';

// --- Constantes ---
const NUBANK_PRIMARY_COLOR = '#820AD1';
const NUBANK_BACKGROUND_COLOR = '#FFFFFF';
const NUBANK_BUTTON_BACKGROUND = '#F0F1F5';
const NUBANK_TEXT_COLOR = '#000000';
const NUBANK_GRAY_TEXT_COLOR = '#555';

// --- "TAGS SEMÂNTICAS" (Componentes Locais) ---

// [BLOCO 1: Cabeçalho]
const Header = ({ isBalanceVisible, onToggleBalance }) => (
  <View style={styles.header}>
    <TouchableOpacity style={styles.userAvatar}>
      <User size={24} color={NUBANK_BACKGROUND_COLOR} />
    </TouchableOpacity>
    <Text style={styles.userName}>Olá, Usuário</Text>
    <View style={styles.headerIcons}>
      <TouchableOpacity onPress={onToggleBalance}>
        {isBalanceVisible ? (
          <Eye size={26} color={NUBANK_BACKGROUND_COLOR} />
        ) : (
          <EyeOff size={26} color={NUBANK_BACKGROUND_COLOR} />
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <HelpCircle size={26} color={NUBANK_BACKGROUND_COLOR} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Mail size={26} color={NUBANK_BACKGROUND_COLOR} />
      </TouchableOpacity>
    </View>
  </View>
);

// [BLOCO 2: Título da Seção]
const SectionTitle = ({ children }) => (
  <Text style={styles.sectionTitle}>{children}</Text>
);

// [BLOCO 3: Seção de Saldo]
const BalanceSection = ({ isBalanceVisible }) => (
  <View style={styles.balanceSection}>
    <SectionTitle>Conta</SectionTitle>
    <Text style={styles.balanceValue}>
      {isBalanceVisible ? 'R$ 1.234,56' : '•••••'}
    </Text>
  </View>
);

// [BLOCO 4: Linha de Ações]
const ActionsRow = () => (
  <View style={styles.actionsContainer}>
    <TouchableOpacity style={styles.actionButton}>
      <DollarSign size={24} color={NUBANK_TEXT_COLOR} />
      <Text style={styles.actionButtonLabel}>Área Pix</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <BarChart2 size={24} color={NUBANK_TEXT_COLOR} />
      <Text style={styles.actionButtonLabel}>Pagar</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.actionButton}>
      <ArrowUpCircle size={24} color={NUBANK_TEXT_COLOR} />
      <Text style={styles.actionButtonLabel}>Transferir</Text>
    </TouchableOpacity>
  </View>
);

// [BLOCO 5: Botão Meus Cartões]
const MyCardsButton = () => (
  <TouchableOpacity style={styles.myCardsButton}>
    <CreditCard size={22} color={NUBANK_TEXT_COLOR} />
    <Text style={styles.myCardsButtonText}>Meus cartões</Text>
  </TouchableOpacity>
);

// [BLOCO 6: Seção da Fatura]
const InvoiceSection = () => (
  <View style={styles.invoiceSection}>
    <SectionTitle>Cartão de crédito</SectionTitle>
    <Text style={styles.invoiceLabel}>Fatura atual</Text>
    <Text style={styles.invoiceValue}>R$ 542,30</Text>
    <Text style={styles.invoiceDueDate}>Limite disponível de R$ 2.500,00</Text>
  </View>
);

// [BLOCO 7: Barra de Navegação Inferior (Flutuante)]
const BottomBar = () => (
  // O <View> agora usa o novo estilo 'bottomBar'
  <View style={styles.bottomBar}> 
    <TouchableOpacity style={styles.bottomIcon}>
      <Home size={22} color={NUBANK_GRAY_TEXT_COLOR} />
      <Text style={styles.bottomLabel}>Início</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomIcon}>
      <DollarSign size={22} color={NUBANK_GRAY_TEXT_COLOR} />
      <Text style={styles.bottomLabel}>Pix</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomIcon}>
      <ShoppingBag size={22} color={NUBANK_GRAY_TEXT_COLOR} />
      <Text style={styles.bottomLabel}>Shopping</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.bottomIcon}>
      <Settings size={22} color={NUBANK_GRAY_TEXT_COLOR} />
      <Text style={styles.bottomLabel}>Config</Text>
    </TouchableOpacity>
  </View>
);

// --- TELA PRINCIPAL ---
// Este componente monta a tela
function NubankAppScreen() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    // SafeAreaView é a "tag" correta para evitar a barra de status
    <SafeAreaView style={styles.safeArea}>
      
      {/* ⬇️ MUDANÇA AQUI ⬇️
        Adicionado 'contentContainerStyle' para o conteúdo não 
        ficar escondido ATRÁS da barra flutuante.
      */}
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <Header
          isBalanceVisible={isBalanceVisible}
          onToggleBalance={() => setIsBalanceVisible(!isBalanceVisible)}
        />
        <BalanceSection isBalanceVisible={isBalanceVisible} />
        <ActionsRow />
        <MyCardsButton />
        <InvoiceSection />
      </ScrollView>

      {/* A Barra Inferior fica FORA do ScrollView para ficar fixa */}
      <BottomBar />
    </SafeAreaView>
  );
}

// --- PONTO DE ENTRADA DO APP (App.js) ---
// O seu index.js chama este 'App'
export default function App() {
  return (
    <SafeAreaProvider>
      <NubankAppScreen />
    </SafeAreaProvider>
  );
}

// --- ESTILOS ---
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: NUBANK_PRIMARY_COLOR, // Pinta a área da barra de status
  },
  // O 'container' principal foi removido do JS,
  // pois o 'safeArea' agora faz esse papel.
  
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    color: NUBANK_BACKGROUND_COLOR,
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    left: 80,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  // Balance
  balanceSection: {
    backgroundColor: NUBANK_BACKGROUND_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: NUBANK_TEXT_COLOR,
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color: NUBANK_TEXT_COLOR,
  },
  // Actions
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: NUBANK_BACKGROUND_COLOR,
    paddingVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionButtonLabel: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: '600',
    color: NUBANK_TEXT_COLOR,
  },
  // My Cards
  myCardsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: NUBANK_BUTTON_BACKGROUND,
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  myCardsButtonText: {
    marginLeft: 15,
    fontSize: 14,
    fontWeight: 'bold',
    color: NUBANK_TEXT_COLOR,
  },
  // Invoice
  invoiceSection: {
    backgroundColor: NUBANK_BACKGROUND_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 10,
    // O 'paddingBottom' foi movido para o 'contentContainerStyle' do ScrollView
  },
  invoiceLabel: {
    fontSize: 14,
    color: NUBANK_GRAY_TEXT_COLOR,
    marginTop: 15,
  },
  invoiceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: NUBANK_TEXT_COLOR,
    marginTop: 4,
  },
  invoiceDueDate: {
    fontSize: 14,
    color: NUBANK_GRAY_TEXT_COLOR,
    marginTop: 4,
  },

  // ⬇️ MUDANÇA AQUI ⬇️
  // Bottom Bar (Estilo Flutuante)
  bottomBar: {
    position: 'absolute', // Faz flutuar
    bottom: 16,           // Distância do fundo
    left: 16,             // Distância da esquerda
    right: 16,            // Distância da direita
    
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: NUBANK_BACKGROUND_COLOR,
    paddingVertical: 14,  
    borderRadius: 25,     // Cantos arredondados
    
    // Sombra para Android
    elevation: 8,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  
  bottomIcon: {
    alignItems: 'center',
  },
  bottomLabel: {
    fontSize: 12,
    color: NUBANK_GRAY_TEXT_COLOR,
    marginTop: 4,
  },
});