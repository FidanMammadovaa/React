import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useRef, useState } from 'react';



function App() {

  let dispatch = useDispatch()
  let tasksArr = useSelector(state => state.tasksArr)

  let [taskInput, setTaskInput] = useState('')

  let taskInputRef = useRef(null)

  

  const handleDeleteTask = (e, index) => {
    e.preventDefault()
    dispatch({ type: 'delete', payload: index})
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (taskInput)
    {
      dispatch({type: 'add', payload: taskInput})
    }
    setTaskInput('')
  }

  return (
    <div className="App">
      <section class="vh-100" style={{ backgroundColor: 'black' }}>
        <div class="container py-5 h-200">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col col-lg-8 col-xl-6">
              <div class="card rounded-3">
                <div class="card-body p-4">
                  <form>
                    <div class="form-group">
                      <label>To Do List</label>
                      <input ref={taskInputRef}
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                        class="form-control" placeholder="Enter task" />
                    </div>
                    <button onClick={handleAddTask}
                      style={{ marginTop: '10px', width: '100px' }}
                      type="submit" class="btn btn-dark">
                      Add</button>
                    <div className="form-group">
                      <h3>All Tasks</h3>
                      <div className="task-list">
                        {tasksArr.map((task, index) => (
                          <div key={index} className="task">{task}
                            <button
                              onClick={(e) => handleDeleteTask(e, index)}
                              style={{ marginBottom: '10px', marginLeft: '20px', width: '80px' }}
                              type="submit" class="btn btn-dark">Delete</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
