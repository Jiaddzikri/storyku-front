import { createContext, useState } from "react";

export const StoryContext = createContext();

export const StoryContextProvider = ({ children }) => {
  const [storyForm, setStoryForm] = useState({
    title: "",
    author: "",
    synopsis: "",
    category: "",
    keywords: [],
    cover_image: "",
    status: "",
    chapters: [],
  });

  console.log(storyForm);

  return (
    <StoryContext.Provider value={{ storyForm, setStoryForm }}>
      {children}
    </StoryContext.Provider>
  );
};
