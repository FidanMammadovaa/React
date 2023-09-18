import { useState } from "react";
import React from "react";

function ToDoList(props) {
    const [tasks, setTasks] = useState([]);


    const handleAddTask = () => {
        if (props.titleInput != '' && props.titleInput != null) {
            setTasks([...tasks, props.titleInput]);
            props.setInputValue('')
            console.log(tasks)
        }
    }


    const handleDeleteTask = (index) => {
        const newListTasks = [...tasks]
        newListTasks.splice(index, 1)
        setTasks(newListTasks)
    }

    return (
        <div>
            <button onClick={handleAddTask} style={{ marginTop: '10px' }} type="button" class="btn btn-dark">Add Task</button>

            <div style={{ width: '40%', margin: '0 auto', padding: '10px' }} >
                <ul className="list-group" >
                    {tasks.map((task, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            {task}
                            <button onClick={() => handleDeleteTask(index)} type="button" className="btn btn-dark">Done</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDoList;
