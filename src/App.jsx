import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });
  // const [tasks, setTasks] = useState( () => {
  //   JSON.parse(localStorage.getItem("tasks") || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // =============== API ===============
  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     // chama a API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       {
  //         method: "GET",
  //       }
  //     );
  //     // pega os dados que ela retorna
  //     const data = await response.json();

  //     // armazena/persisti no state
  //     setTasks(data)
  //   };
  //   fetchTasks();
  // }, []);

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
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
