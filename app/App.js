import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NUBANK_PRIMARY_COLOR = '#820AD1';
const NUBANK_BACKGROUND_COLOR = '#FFFFFF';
const NUBANK_BUTTON_BACKGROUND = '#F0F1F5';
const NUBANK_TEXT_COLOR = '#000000';
const NUBANK_GRAY_TEXT_COLOR = '#555';

const NubankHomeScreen = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.userAvatar}>
          <Icon name="user" size={24} color={NUBANK_BACKGROUND_COLOR} />
        </TouchableOpacity>
        <Text style={styles.userName}>Olá, Usuário</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
            <Icon name={isBalanceVisible ? 'eye' : 'eye-off'} size={26} color={NUBANK_BACKGROUND_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="help-circle" size={26} color={NUBANK_BACKGROUND_COLOR} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="mail" size={26} color={NUBANK_BACKGROUND_COLOR} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Seção de Saldo */}
      <View style={styles.balanceSection}>
        <Text style={styles.sectionTitle}>Conta</Text>
        <Text style={styles.balanceValue}>
          {isBalanceVisible ? 'R$ 1.234,56' : '•••••'}
        </Text>
      </View>

      {/* Botões Simples */}
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="dollar-sign" size={24} color={NUBANK_TEXT_COLOR} />
          <Text style={styles.actionButtonLabel}>Área Pix</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="barcode" size={24} color={NUBANK_TEXT_COLOR} />
          <Text style={styles.actionButtonLabel}>Pagar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <Icon name="arrow-up-circle" size={24} color={NUBANK_TEXT_COLOR} />
          <Text style={styles.actionButtonLabel}>Transferir</Text>
        </TouchableOpacity>
      </View>

      {/* Meus Cartões */}
      <TouchableOpacity style={styles.myCardsButton}>
        <Icon name="credit-card" size={22} color={NUBANK_TEXT_COLOR} />
        <Text style={styles.myCardsButtonText}>Meus cartões</Text>
      </TouchableOpacity>

      {/* Fatura do Cartão */}
      <View style={styles.invoiceSection}>
        <Text style={styles.sectionTitle}>Cartão de crédito</Text>
        <Text style={styles.invoiceLabel}>Fatura atual</Text>
        <Text style={styles.invoiceValue}>R$ 542,30</Text>
        <Text style={styles.invoiceDueDate}>Limite disponível de R$ 2.500,00</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: NUBANK_PRIMARY_COLOR,
  },
  // Header
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: NUBANK_PRIMARY_COLOR,
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
});

export default NubankHomeScreen;
