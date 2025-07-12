import React, { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import TagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

const AskQuestion = () => {
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Tags:", tags); // dynamic user-entered tags
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Ask a Question</h1>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Question Title</label>
          <input
            type="text"
            name="title"
            placeholder="e.g., How to center a div using Tailwind?"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <RichTextEditor
            value={description}
            onChange={setDescription}
            className="mt-2"
          />
        </div>

        {/* ✨ Tag Input Field */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Tags</label>
          <TagInput
            tags={tags}
            onChange={setTags}
            placeholder="Type and press enter"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Post Your Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
