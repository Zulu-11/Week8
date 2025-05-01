import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios for API calls
import styles from "./App.styles";

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostList = ({ navigation }) => {
  const [posts, setPosts] = useState<Post[]>([]);

    const getPosts = async () => {
      return await axios.get("https://jsonplaceholder.typicode.com/posts"); // Example API endpoint
    };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <ScrollView>
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          style={styles.card}
          onPress={() => navigation.navigate("Forms", { post })}
        >
          <View style={styles.description}>
            <Text style={styles.boldText}>{post.title}</Text>
            <Text numberOfLines={2}>{post.body}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};