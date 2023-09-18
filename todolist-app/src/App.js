import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {

  const [titleInput, setInputValue] = useState('')

  return (
    <div className="App">
      <h1>To Do list</h1>
      <input type='text' placeholder='Enter title' value={titleInput} onChange={async (e) => setInputValue(e.target.value)} />
      <ToDoList titleInput={titleInput} setInputValue={setInputValue}/>

    </div>
  );



}
export default App;