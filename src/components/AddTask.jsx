import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit, }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 flex flex-col space-y-4 p-6 rounded-md shadow">
      <Input
        type="text"
        placeholder="Insert Title Here"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Insert description here"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Insert title and description");
          }
          onAddTaskSubmit(title, description);
        }}
        className="cursor-pointer dark:bg-gray-800 text-white px-4 py-2 rounded-md font-medium"
      >
        Insert
      </button>
    </div>
  );
}

export default AddTask;
