import React, {useState} from 'react'

function ToDoList(){
    const [tasks,setTask] = useState(["Walk The Cat","Clean The Dishes","Wash the house"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i) => i !== index)
        setTask(updatedTasks);
    }

    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    function moveTaskDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTask(updatedTasks);
        }
    }

    return(
        <div>
            <h2>To Do List</h2>
            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button onClick={addTask} className="add-button">Add</button>
            </div>
            <ol>
                {tasks.map((task,index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)}>Delete task</button>
                        <button onClick={() => moveTaskUp(index)}>☝️</button>
                        <button onClick={() => moveTaskDown(index)}>👇</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList