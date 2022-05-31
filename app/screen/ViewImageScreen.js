import React from "react";
import { Image, StyleSheet, View } from "react-native";

import color from "../config/color";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
        <View style={styles.closeIcon}></View>
        <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  closeIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: color.primary,
    top: 40,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    width: 50,
    height: 50,
    backgroundColor: color.secondary,
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
