import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { updatePost } from "./services/axios";
import styles from "./App.styles";

const Forms = ({ navigation, route }) => {
  const { post } = route.params;
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleUpdate = async () => {
    try {
      await updatePost(post.id, { title, body });
      navigation.goBack();
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={styles.input}
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        placeholder="Body"
        multiline
        style={[styles.input, { height: 100 }]}
      />
      <Button title="UPDATE POST" onPress={handleUpdate} />
      <Button title="GO BACK" onPress={() => navigation.goBack()} />
    </View>
  );
};