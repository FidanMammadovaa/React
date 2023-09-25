import './App.css';
import { useEffect, useState } from 'react';

function App() {


  const tasks = [
    { id: 1, name: "Do homework" },
    { id: 2, name: "Wash dishes" },
    { id: 3, name: "Play guitar" },
    { id: 4, name: "Sing song" },
  ]

  const [filteredTasksList, setFilteredTasksList] = useState([])

  const [text, setText] = useState('')

  useEffect(() => {
    const chosenTasks = tasks.filter((task) =>
      task.name.toLowerCase().includes(text.toLowerCase()))
    setFilteredTasksList(chosenTasks)
  }, [text])

  return (
    <div className="App" style={{ width: '500px' }}>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Filter</label>
        <div class="col-sm-5">
          <input value={text} onChange={(e) => setText(e.target.value)} type="text" class="form-control-plaintext" placeholder='Enter text' />
        </div>
      </div>
      <div style={{ float: 'left' }}>
        <label>All tasks list</label>
        <ul>
        {tasks.map((task) =>
        (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
      </div>
      
      <div style={{ float: 'right' }}>
        <label>Filtered tasks</label>
        <ul>
          {filteredTasksList.map((task) =>
          (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>
      </div>


    </div>
  );
}

export default App;
