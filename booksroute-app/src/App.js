import './App.css';
import { BrowserRouter, Routes, Route, Navigate  } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Book } from './Book';
import { About } from './About';

import React, { useState } from 'react';

function App() {


  let [searchTerm, setSearchTerm] = useState('');
  let [searchResults, setSearchResults] = useState([]);

  let [booksArr, setBooksArr] = useState(
    [
      {
        id: 1,
        title: 'Убить пересмешника',
        author: 'Харпер Ли',
        genre: 'Роман',
        year: 1960,
        description: 'Роман о расизме и неравенстве в американском обществе.',
        url: 'https://avatars.mds.yandex.net/i?id=e2deeef21dd4f77835ed282afe866a3cb76a291b-9838067-images-thumbs&n=13'
      },
      {
        id: 2,
        title: 'Великий Гэтсби',
        author: 'Фрэнсис Скотт Фицджеральд',
        genre: 'Роман',
        year: 1925,
        description: 'История о богатстве, любви и иллюзиях в эпоху роковых двадцатых.',
        url: 'https://ndc.book24.ru/iblock/750/750b210f353468390562f6ed816649d5/f17cf990600548ea839f14a46b45d5b1.jpg'
      },
      {
        id: 3,
        title: 'Гордость и предубеждение',
        author: 'Джейн Остин',
        genre: 'Роман',
        year: 1813,
        description: 'Классический роман о любви и общественных нормах в Англии 19 века.',
        url: 'https://static.insales-cdn.com/images/products/1/1020/171074556/c1704ecce94582f91de8bc0ea1824bf2.jpg'
  
      }
    ]
  )


  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/*' element={<Home booksArr={booksArr}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/book' element={<Book/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
