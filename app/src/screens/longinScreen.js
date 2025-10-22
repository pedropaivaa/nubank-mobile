import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';

const NUBANK_PRIMARY_COLOR = '#820AD1';
const NUBANK_TEXT_COLOR = '#FFFFFF';

function LoginScreen({ navigation }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleFingerprintLogin = () => {
    setIsModalVisible(true); // Abre o pop-up
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Fecha o modal
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require('../../assets/logo.png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Parte inferior com os botões */}
      <View style={styles.bottomContent}>
        <TouchableOpacity
          style={styles.fingerprintButton}
          onPress={handleFingerprintLogin}
        >
          <Text style={styles.altButtonText1}>Usar senha do celular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.altButton}>
          <Text style={styles.altButtonText}>Usar senha do app</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de simulação */}
      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirme sua identidade</Text>
            <Text style={styles.modalText}>
              Toque no sensor de digital para continuar
            </Text>

            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.cancelButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NUBANK_PRIMARY_COLOR,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  bottomContent: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  fingerprintButton: {
    backgroundColor: '#ffffffff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    height: 41,
    width: 300,
  },
  altButtonText1: {
    color: '#000000ff',
    fontSize: 14,
    textAlign: 'center',
    width: '100%',
  },
  altButton: {
    marginTop: 20,
  },
  altButtonText: {
    color: '#E5E5E5',
    fontSize: 14,
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 30,
    alignItems: 'center',
  },
  fingerprintEmoji: {
    fontSize: 48,
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#444',
    marginBottom: 30,
  },
  cancelButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
  cancelButtonText: {
    color: '#333',
    fontSize: 14,
  },
});

export default LoginScreen;
