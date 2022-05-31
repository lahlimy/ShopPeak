import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import AppButton from "../components/AppButton";
function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.logoText}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
      <AppButton title="Login" color="primary" onPress={() => console.log("OK Pressed")} />
      <AppButton title="register" color="secondary"  onPress={() => console.log("OK Pressed")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems:"center",
  },
  logoText: {
    paddingVertical: 20,
    fontSize: 25,
    fontWeight: "600"
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
    
  },
});

export default WelcomeScreen;
