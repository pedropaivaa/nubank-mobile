import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity,
  Image
} from 'react-native';

const NUBANK_PRIMARY_COLOR = '#820AD1';
const NUBANK_TEXT_COLOR = '#FFFFFF';

function LoginScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFingerprintLogin = () => {
    setIsLoading(true);
    // Simula leitura biométrica
    setTimeout(() => {
      setIsLoading(false);
      // Aqui você navega para a tela principal (exemplo)
      // navigation.navigate('Home');
      alert('Login com digital bem-sucedido!');
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <View style={styles.logoCircle}>
          <Text style={styles.logoText}>N</Text>
        </View>
        <Text style={styles.appName}>Nubank</Text>
      </View>

      {/* Mensagem de boas-vindas */}
      <Text style={styles.welcomeText}>Olá, Usuário</Text>
      <Text style={styles.subText}>Use sua digital para entrar</Text>

      {/* Botão de digital */}
      <TouchableOpacity 
        style={styles.fingerprintButton}
        onPress={handleFingerprintLogin}
        disabled={isLoading}
      >
        <Text style={styles.fingerprintEmoji}>🔒</Text>
        <Text style={styles.fingerprintText}>
          {isLoading ? 'Verificando...' : 'Entrar com digital'}
        </Text>
      </TouchableOpacity>

      {/* Botão alternativo */}
      <TouchableOpacity style={styles.altButton}>
        <Text style={styles.altButtonText}>Usar senha do app</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NUBANK_PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#9B2DF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    color: NUBANK_TEXT_COLOR,
    fontSize: 40,
    fontWeight: 'bold',
  },
  appName: {
    color: NUBANK_TEXT_COLOR,
    fontSize: 22,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: NUBANK_TEXT_COLOR,
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  subText: {
    color: '#E5E5E5',
    fontSize: 14,
    marginBottom: 40,
  },
  fingerprintButton: {
    backgroundColor: '#9B2DF5',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  fingerprintEmoji: {
    fontSize: 24,
  },
  fingerprintText: {
    color: NUBANK_TEXT_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
  },
  altButton: {
    marginTop: 20,
  },
  altButtonText: {
    color: '#E5E5E5',
    fontSize: 14,
  },
});

export default LoginScreen;
