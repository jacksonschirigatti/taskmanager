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
    {
      id: 2,
      title: "Make Github",
      description: "Create Github and edit her",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Make Index File",
      description: "Create Index File and edit her",
      isCompleted: true,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask])
  }

  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-center text-slate-100">
          Task Manager
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}></AddTask>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        ></Tasks>
      </div>
    </div>
  );
}

export default App;
