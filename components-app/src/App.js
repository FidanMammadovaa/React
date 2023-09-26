import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';


function App() {

  const [aActive, setaActive] = useState(false)
  const [bActive, setbActive] = useState(false)

  const changeAVisibility = () => {
    setaActive(!aActive)
  }

  const changeBVisibility = () => {
    setbActive(!bActive)
  }


  return (


    <div className='App'>
      <ComponentA className={aActive ? 'visible' : 'hidden'}>A</ComponentA>
      <ComponentB className={bActive ? 'visible' : 'hidden'}>B</ComponentB>
      <button onClick={changeAVisibility}>{aActive ? 'Hide A component' : 'Show A component'}</button>
      <button onClick={changeBVisibility}>{bActive ? 'Hide B component' : 'Show B component'}</button>
    </div>
  );
}

export default App;


const ComponentA = styled.h1`
  color: red;  
`;

const ComponentB = styled.h1`
  color: blue;
`;
