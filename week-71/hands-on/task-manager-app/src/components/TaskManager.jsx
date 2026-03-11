import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";

function TaskManager(){
    const [tasks,setTasks] = useState([]);
    console.log("TaskManager rendering")
    return(
        <div>
            <h1>Task Manager</h1>
            <AddTaskForm tasks={tasks} setTasks={setTasks}/>
            <TaskList tasks={tasks} setTasks={setTasks}/>
            <h3>Total tasks: {tasks.length}</h3>
            <h3>Completed: {tasks.filter(tasks => tasks.completed).length}</h3>

        </div>
    );
}


export default TaskManager;