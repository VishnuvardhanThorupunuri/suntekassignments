function TaskItem({ task, tasks, setTasks }) {

  const toggleComplete = () => {
    const updatedTasks = tasks.map(t =>
      t.id === task.id
        ? { ...t, completed: !t.completed }
        : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = () => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3 style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </h3>

      <button onClick={toggleComplete}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;