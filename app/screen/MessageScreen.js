import React from "react";
import { FlatList } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSperator from "../components/ListItemSperator";
import Screen from "../components/Screen";
const message = [
  {
    // he wanna buy phone
    id: 1,
    title: "Phone 7 Plus",
    description: "How Much It Please!",
    image: require("../assets/image1.jpg"),
  },
  {
    // he wanna buy pc
    id: 2,
    title: "MacBook Pro 13",
    description: "It's Working ?",
    image: require("../assets/image2.jpg"),
  },
  {
    // he wanna buy watch
    id: 3,
    title: "Watch",
    description: "Which Model it is ?",
    image: require("../assets/image3.jpg"),
  },
  {
    // she wanna buy jacket
    id: 4,
    title: "Jacket Red",
    description: "Please is there another color?",
    image: require("../assets/image4.jpg"),
  },
];

function MessageScreen(props) {
  return (
    <Screen>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected", item)}
          />          
        )}
          ItemSeparatorComponent={ListItemSperator}
      />
    </Screen>
  );
}
export default MessageScreen;
