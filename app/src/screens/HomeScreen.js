import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/home/perfil.png")}
          style={styles.profileImage}
        />

        <Text style={styles.greeting}>Olá, Usuário!</Text>

        <View style={styles.headerIcons}>
            <Image 
                source={require("../../assets/home/eye.png")}
                style={styles.icon}
            />

            <Image 
                source={require("../../assets/home/letter.png")}
                style={styles.icon}
            />

            <Image 
                source={require("../../assets/home/ask.png")}
                style={styles.icon}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8A05BE", 
    paddingTop: 50, 
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  greeting: {
    flex: 1,
    color: "#FFF",
    fontSize: 18,
    marginLeft: 10,
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
    tintColor: "#FFF",
  },
});
