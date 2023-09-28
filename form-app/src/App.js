
import React, { useState } from 'react';
import './App.css';



function App() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm: '',
  });


  const logData = (ev) =>
  {
    let formData = new FormData(ev.target)
    let inputsArray = [...formData.entries()]
    
    inputsArray.forEach((item) => {
      console.log(item.join(' '))
    })
  }

  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkEmailValidation = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!checkEmailValidation(formData.email)) {
      setError('Wrong email input');
      return;
    }
    if (formData.password !== formData.confirm) {
      setError('Password and confirm do not match');
      return;
    }

    if (formData.password.length < 8) {
      setError('Password length must be at least 8 characters');
      return;
    }

    
    logData(ev)




    setFormData({
      username: '',
      email: '',
      password: '',
      confirm: '',
    });
    setError('');
  };

  return (
    <form style={{ padding: '10px' }} onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          value={formData.username}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          name="username"
          placeholder="Enter name"
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          value={formData.email}
          onChange={handleInputChange}
          type="email"
          className="form-control"
          name="email"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          value={formData.password}
          onChange={handleInputChange}
          type="password"
          className="form-control"
          name="password"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="form-group">
        <label>Confirm</label>
        <input
          value={formData.confirm}
          onChange={handleInputChange}
          type="password"
          className="form-control"
          name="confirm"
          placeholder="Confirm password"
          required
        />
      </div>
      <button style={{ margin: '10px' }} type="submit" className="btn btn-dark">
        Submit
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default App;