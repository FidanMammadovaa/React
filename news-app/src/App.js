import './App.css';
import React, { useState, useEffect } from 'react';
import NewsContent from './NewsContent';
function App() {

  const [info, setInfo] = useState([])

  useEffect(() => {
    async function fetchData() {
      const apiKey = 'd04bdae1dd194cf4a6ca35b4a16609b6'
      const url = 'https://newsapi.org/v2/top-headlines?' +
      'sources=bbc-news&' +
      `apiKey=${apiKey}`


      const response = await fetch(url)
      if (response.status === 200) {
        const data = await response.json()
        setInfo(data.articles)
      }
    }

    fetchData();
    
  }, [])


  return (
    <div className="App">
      <NewsContent newsInfo={info}/>
    </div>
  );
}

export default App;
