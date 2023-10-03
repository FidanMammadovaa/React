import './App.css';
import React, { useReducer, useState, useRef } from 'react'
import { reducer, initialState } from './reducer';


function App() {

  let [taskList, dispatch] = useReducer(reducer, initialState)

  let [taskInput, setTaskInput] = useState('')
  let taskInputRef = useRef(null);


  let handleAddTask = (e) => {
    e.preventDefault()
    if (taskInput) {
      dispatch({ type: 'Add', payload: taskInput })
      setTaskInput('')
    }
  }

  let handleMarkTaskDone = (e, index) => {
    e.preventDefault()

    let updateTask = taskList.tasks[index]
    dispatch({ type: 'Mark Done', payload: updateTask })

  }


  let handleDeleteTask = (e, index) => {
    e.preventDefault()

    let deleteTask = taskList.tasks[index]
    dispatch({ type: 'Delete', payload: deleteTask })

  }

  let handleUndoneTask = (e, index) => {
    e.preventDefault()
    let undoneTask = taskList.doneTasks[index]
    dispatch({ type: 'Undone', payload: undoneTask })
  }

  return (
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
                      {taskList.tasks.map((task, index) => (
                        <div key={index} className="task">{task}
                          <button onClick={(e) => handleMarkTaskDone(e, index)}
                            style={{ marginBottom: '10px', marginLeft: '20px', width: '80px' }}
                            type="submit" class="btn btn-dark">Done</button>

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
      <div class="container py-5 h-200">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-8 col-xl-6">
            <div class="card rounded-3">
              <div class="card-body p-4">
                <form>
                  <div className="form-group">
                    <h3>Done Tasks</h3>
                    <div className="task-list">
                      {taskList.doneTasks.map((task, index) => (
                        <div key={index} className="task">
                          {task}
                          <button
                            onClick={(e) => handleUndoneTask(e, index)}
                            style={{ marginBottom: '10px', marginLeft: '20px', width: '100px' }}
                            type="submit" class="btn btn-dark">
                            Undone
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
