"use client";

import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];
const Editor = ({ setState, name, text }) => {
  const [paragraph, setParagraph] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setState((prev) => ({ ...prev, [name]: paragraph }));
    }, 500);

    return () => clearTimeout(timer);
  },[paragraph]);
  return (
    <div className="relative mt-5 h-[400px]">
      <label>{text}</label>
      <ReactQuill
        className="h-[90%] mt-3"
        onChange={setParagraph}
        formats={formats}
        modules={modules}
      />
    </div>
  );
};
export default Editor;
