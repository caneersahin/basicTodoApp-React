import "./App.css";
import CreateTask from "./CreateTask";
import Header from "./Header";
import Task from "./Task";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = () => {
    const savedData = JSON.parse(localStorage?.getItem("myTask"));
    if (savedData) {
      setTasks(savedData);
    }
  };

  const addTask = (newTask) => {
    setTasks((prevTask) => {
      return [...prevTask, newTask];
    });
    localStorage.setItem("myTask", JSON.stringify(tasks));
  };

  const deleteTask = (id) => {
    setTasks((prevTask) => {
      const updatedTasks = prevTask.filter((taskItem, index) => index !== id);
      localStorage.setItem("myTask", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <Header />
      <CreateTask onAdd={addTask} />
      <div className="row d-flex contentArea">
        {tasks.map((taskItem, index) => {
          return (
            <Task
              key={index}
              id={index}
              title={taskItem.title}
              content={taskItem.content}
              delete={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
