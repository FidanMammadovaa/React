import logo from './logo.svg';
import React, {useEffect, useRef} from 'react'
import './App.css';

export function FocusInput()
{

  let inputValue = useRef(null)
  useEffect(() =>
  {
    inputValue.current.focus()
  }, [])
  


  const handleSetFocus = () =>
  {
    inputValue.current.focus();
  }

  return (
    <div>
      <input ref={inputValue}></input>
      <button onClick={handleSetFocus}>Set</button>
    </div>
  )
}



function App() {

  

  return (
    <div className="App">
      <FocusInput></FocusInput>
    </div>
  );
}

export default App;
