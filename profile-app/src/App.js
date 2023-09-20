import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import Profile from './Profile';

function App() {

  const [profile, setProfile] = useState(
    {
      name: 'Fidan',
      age: '19',
      profession: '.NET Developer',
      favoriteBook: 'The little prince'
    }
  )

  const nameRef = useRef(null)
  const ageRef = useRef(null)
  const professionRef = useRef(null)
  const favoriteBookRef = useRef(null)


  const updateName = () =>
  {
    const setName = nameRef.current.value
    setProfile((profile) => ({...profile, name: setName}))
  }

  const updateAge = () =>
  {
    const setAge = ageRef.current.value
    setProfile((profile) => ({...profile, age: setAge}))
  }

  const updateProfession = () =>
  {
    const setProfession = professionRef.current.value
    setProfile((profile) => ({...profile, profession: setProfession}))
  }

  const setFavoriteBookName = () =>
  {
    const setFavoriteBook = favoriteBookRef.current.value
    setProfile((profile) => ({...profile, favoriteBook: setFavoriteBook}))
  }


  return (
    <div className='App'>
      <div class='form-group row col-sm-5'>
        <input ref={nameRef}  type='text' placeholder='Enter name' />
        <button onClick={updateName}>Update name</button>
        <input ref={ageRef} type='text' placeholder='Enter age' />
        <button onClick={updateAge}>Update age</button>
        <input ref={professionRef} type='text' placeholder='Enter profession' />
        <button onClick={updateProfession}>Update profession</button>
        <input ref={favoriteBookRef} type='text' placeholder='Enter favorite book' />
        <button onClick={setFavoriteBookName}>Set favorite book</button>
      </div>


      <Profile profile={profile} />
    </div>
  );
}

export default App;



