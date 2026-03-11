import { useState } from "react";

function AddTaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();   //  Stops refresh

    console.log("Submitted"); // Debug

    if (title.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false
    };

    setTasks([...tasks, newTask]);

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;