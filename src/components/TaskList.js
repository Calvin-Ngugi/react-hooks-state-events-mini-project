import React from "react";
import Task from "./Task";

function TaskList({tasks, deleteTask}) {
  const displayTask = tasks.map((task) =>(
    <Task
    key={task.text}
    text={task.text}
    category={task.category}
    deleteTask={deleteTask}
    />
  ))
  return (
    <div className="tasks">
      {displayTask}
    </div>
  );
}

export default TaskList;
