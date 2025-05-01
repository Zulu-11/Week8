import axios from "axios";

const ENV = process.env.EXPO_PUBLIC_API_URL;

// GET Posts
export const getPosts = () => {
  return axios.get(ENV + "posts");
};

// UPDATE Post
export const updatePost = (postId: number, data: { title: string; body: string }) => {
  return axios.put(ENV + `posts/${postId}`, data);
};