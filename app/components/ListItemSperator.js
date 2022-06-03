import React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

function ListItemSperator(props) {
  return <View style={styles.sperator} />;
}
const styles = StyleSheet.create({
  sperator: {
    backgroundColor: colors.light,
    width: "100%",
    height: 1,
  },
});

export default ListItemSperator;
