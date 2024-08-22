import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./output.css";
import Dashboard from "./pages/Dashboard";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StoryManagement from "./pages/StoryManagement";
import ShowStory from "./components/story-management/ShowStory";
import AddStory from "./components/story-management/AddStory";
import { StoryContextProvider } from "./context/StoryContext";
import AddChapter from "./components/story-management/AddChapter";

const router = createBrowserRouter([
  {
    path: "/management",

    element: (
      <StoryContextProvider>
        <StoryManagement />
      </StoryContextProvider>
    ),
    children: [
      {
        path: "show",
        element: <ShowStory />,
      },
      {
        path: "add",
        element: <AddStory />,
      },
      {
        path: "add-chapter",
        element: <AddChapter />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
