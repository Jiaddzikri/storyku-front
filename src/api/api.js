import axios from "axios";
import { formData } from "../utils/formData";

export const getCategories = async () => {
  const response = await axios.get("http://localhost/api/categories");

  return response;
};
export const postStory = async (data) => {
  const response = await axios.post(
    "http://localhost/api/story",
    formData(data)
  );

  return response;
};

export const getStories = async (data) => {
  const response = await axios.get("http://localhost/api/stories");
  return response;
};

export const search = async (keyword) => {
  const response = await axios.get(
    `http://localhost/api/story?keyword=${keyword}`
  );
  return response;
};
