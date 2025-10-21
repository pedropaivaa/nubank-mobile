import { View, StyleSheet, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import Imagem from "../components/imagem";
import Texto from "../components/texto";

const NUBANK_PRIMARY_COLOR = "#820AD1";

export default function paginaInicial() {
  return (
    <View style={styles.container}>
      <Imagem
        style={styles.logo}
        source={require("../../assets/logo.png")} 
      />

      <Pressable style={styles.botaoEntrar}>
        <Texto text="Entrar na conta" style={styles.textoBotao} />
      </Pressable>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: NUBANK_PRIMARY_COLOR, 
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  botaoEntrar: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  textoBotao: {
    color: NUBANK_PRIMARY_COLOR,
    fontSize: 16,
    fontWeight: "bold",
  },
});

