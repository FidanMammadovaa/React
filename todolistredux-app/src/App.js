import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from 'react';

function App() {
  let dispatch = useDispatch()
  let tasksArr = useSelector(state => state.tasksArr)

  let [taskInput, setTaskInput] = useState('')
  let [updateTaskInputs, setUpdateTaskInputs] = useState([])

  let taskInputRef = useRef(null)

  useEffect(() => {
    console.log(tasksArr)
  }, [tasksArr])

  const handleDeleteTask = (e, index) => {
    e.preventDefault()
    dispatch({ type: 'delete', payload: index })
  }

  const handleAddTask = (e) => {
    e.preventDefault()
    if (taskInput) {
      dispatch({ type: 'add', payload: taskInput })
    }
    setTaskInput('')
  }

  const handleUpdateTask = (e, index) => {
    e.preventDefault()
    if (updateTaskInputs[index]) {
      dispatch({ type: 'update', payload: { index, task: updateTaskInputs[index] } })
    }


    setUpdateTaskInputs(prevInputs => {
      const newInputs = [...prevInputs]
      newInputs[index] = ''
      return newInputs
    })
  }

  return (
    <section className="vh-100" style={{ backgroundColor: 'black' }}>
      <div className="container py-5 h-200">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <form>
                  <div className="form-group">
                    <label>To Do List</label>
                    <input
                      ref={taskInputRef}
                      value={taskInput}
                      onChange={(e) => setTaskInput(e.target.value)}
                      className="form-control"
                      placeholder="Enter task"
                    />
                  </div>
                  <button
                    onClick={handleAddTask}
                    style={{ marginTop: '10px', width: '100px' }}
                    type="submit"
                    className="btn btn-dark"
                  >
                    Add
                  </button>
                  <div className="form-group">
                    <h3>All Tasks</h3>
                    <div className="task-list">
                      {tasksArr.map((task, index) => (
                        <div key={index} className="task">
                          {task}
                          <button
                            onClick={(e) => handleDeleteTask(e, index)}
                            style={{ marginBottom: '10px', marginLeft: '20px', width: '80px' }}
                            type="submit"
                            className="btn btn-dark"
                          >
                            Delete
                          </button>
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
      <div className="container py-5 h-200">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-8 col-xl-6">
            <div className="card rounded-3">
              <div className="card-body p-4">
                <form>
                  <div className="form-group">
                    <div className="task-list">
                      {tasksArr.map((task, index) => (
                        <div key={index} className="task">
                          {task}
                          <input
                            value={updateTaskInputs[index]}
                            onChange={(e) => {
                              const newInputs = [...updateTaskInputs]
                              newInputs[index] = e.target.value
                              setUpdateTaskInputs(newInputs)
                            }}
                            className="form-control"
                            placeholder="Enter task"
                          />
                          <button
                            onClick={(e) => handleUpdateTask(e, index)}
                            style={{ marginBottom: '10px', marginTop: '10px', width: '100px' }}
                            type="submit"
                            className="btn btn-dark"
                          >
                            Update
                          </button>
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
  );
}

export default App;
