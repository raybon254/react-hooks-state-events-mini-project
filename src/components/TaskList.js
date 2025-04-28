import React, { useState } from "react";
import Task from "./Task";

function TaskList({ TASKS, onDeleteTask }) {
  return (
    <div className="tasks">
      {TASKS.map((task) => (
        <Task
          key={task.text + task.category}
          text={task.text}
          category={task.category}
          onDelete={() => onDeleteTask(task)}
        />
      ))}
    </div>
  );
}


export default TaskList;