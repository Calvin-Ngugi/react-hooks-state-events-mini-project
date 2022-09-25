import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks,setTasks]=useState(TASKS);
  const[category,setCategory]=useState("All");

  const handleDeleteTask = (deletedTaskText) => {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText));
  }

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  } 
  const seenTasks=tasks.filter(
    (task)=>category==='All' || task.category === category
  )
 return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} selectingCategory={setCategory}/>
      <NewTaskForm categories={CATEGORIES.filter((newCat) => newCat !== "All")} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={seenTasks} deleleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
