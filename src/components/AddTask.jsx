import { useState } from "react";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="bg-slate-200 flex flex-col space-y-4 p-6 rounded-md shadow">
      <input
        type="text"
        placeholder="Insert Title Here"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Insert description here"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <button
        onClick={() => onAddTaskSubmit(title, description)}
        className="cursor-pointer bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Insert
      </button>
    </div>
  );
}

export default AddTask;
