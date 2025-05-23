import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Make Read-me",
      description: "Create Read-me and edit her",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl font-bold text-center text-slate-100">
          Task Manager
        </h1>
        <AddTask></AddTask>
        <Tasks></Tasks>
      </div>
    </div>
  );
}

export default App;
