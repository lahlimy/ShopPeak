import { StyleSheet, Text, View, Platform, StatusBar, Dimensions} from "react-native";

export default function App() {
  console.log(Dimensions.get("screen"))
  
  return (
    <View style={styles.container}>
      <Text>
        Hello React Native !
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
