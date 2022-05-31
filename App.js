import React from "react";
import { View } from "react-native";
import Card from './app/components/Card';
/* import ViewImageScreen from "./app/screen/ViewImageScreen"; */
/*  import WelcomeScreen from "./app/screen/WelcomeScreen";  */

export default function App() {
  return (
    <View style={{
      backgroundColor: 'f8f4f4',
      padding: 20,
      paddingTop: 100
    }}>
      <Card 
      title="Red jacket for sale!"
      subTitle="$99"
      image="required('./app/assets/jacket.jpg')" />
    </View>

  );
}
