import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemSperator from "../components/ListItemSperator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "Samsung Galaxy S7",
    description: "Please, it's stell Working ?",
    image: require("../assets/image1.jpg"),
  },
  {
    id: 2,
    title: "MacBook 2013 '15' Pouce" ,
    description: "How Much it ?",
    image: require("../assets/image2.jpg"),
  },
  {
    id: 3,
    title: "Iphone 7 Plus",
    description: "Can u send me anthor Images ?",
    image: require("../assets/image3.jpg"),
  },
  {
    id: 4,
    title: "Jacket dior RED",
    description: "it's orginal",
    image: require("../assets/image4.jpg"),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSperator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: "MacBook 2013 '15' Pouce" ,
              description: "How Much it ?",
              image: require("../assets/image2.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
