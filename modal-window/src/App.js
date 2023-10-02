import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom';

export function Modal(props) {
  return ReactDOM.createPortal(props.children, document.getElementById('modalRoot'))
}

function App() {
  const [isOpen, setOpen] = useState(false)

  const openModalWindow = () => {
    setOpen(true)
  }

  const closeModalWindow = () => {
    setOpen(false)
  }

  return (

    <div className="App">
      <button onClick={openModalWindow}>Open</button>
      {isOpen && (
        <Modal>
          <div style={{ color: 'black' }}>
          </div>
          <button className="close-button" onClick={closeModalWindow}>
            Close
          </button>
        </Modal>
      )}
    </div>
  );
}

export default App;
