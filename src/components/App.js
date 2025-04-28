import React, { useState } from "react";
import TaskList from "./TaskList";
import CategoryFilter from "./CategoryFilter";
import { TASKS, CATEGORIES } from "../data";
import NewTaskForm from "./NewTaskForm"; 

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);

  const handleSelectCategory = (category) => setSelectedCategory(category);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="App">
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList TASKS={filteredTasks} onDeleteTask={(taskToDelete) => {
        setTasks((prevTasks) =>
          prevTasks.filter(
            (task) => task.text !== taskToDelete.text || task.category !== taskToDelete.category
          )
        );
      }} />
    </div>
  );
}

export default App;