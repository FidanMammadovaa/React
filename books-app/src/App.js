import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Books from './Books';
import axios from 'axios';

//#region Third Task

// function App() {

//   const [bookInfo, setBookInfo] = useState({})
//   const [bookTitleInput, setInputValue] = useState('')

//   const handleButtonClick = async ()=>
//   {
//     const options = {
//       method: 'GET',
//       url: 'https://book-finder1.p.rapidapi.com/api/search',
//       params: {
//         title: `${bookTitleInput}`,
//         results_per_page: '1',
//         page: '1'
//       },
//       headers: {
//         'X-RapidAPI-Key': '5d1f93e7fcmsh31cd902310f3596p15d104jsn5981f11710d4',
//         'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
//       }
//     };
    
//     try {
//       const response = await axios.request(options);
//       if (response.status === 200)
//       {
//       const result = response.data.results[0];
//       console.log(result);
//       setBookInfo(result);
//       }
//       else
//       {
//         alert('Wrong Input')
//       }
//     } catch (error) {
//       console.error(error);
      
//     }
//   }

//   return (
//     <div className="App">
//       <input type='text' value={bookTitleInput} placeholder='Enter book title' onChange={async (e) => setInputValue(e.target.value)}/>
//       <button onClick={handleButtonClick}>Get Info</button>
//       <Books bookInfo={bookInfo}/>
//     </div>
//   );
// }

//#endregion


//#region Fourth Task

class App extends Component{
  constructor()
  {
    super();
    this.state = 
    {
      bookInfo: {},
      bookTitleInput: ''
    };
  }


  handleButtonClick = async ()=>
  {
    const options = {
      method: 'GET',
      url: 'https://book-finder1.p.rapidapi.com/api/search',
      params: {
        title: `${this.state.bookTitleInput}`,
        results_per_page: '1',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': '5d1f93e7fcmsh31cd902310f3596p15d104jsn5981f11710d4',
        'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      if (response.status === 200)
      {
      const result = response.data.results[0];
      console.log(result);
      this.setState({bookInfo: result});
      }
      else
      {
        alert('Wrong Input')
      }
    } catch (error) {
      console.error(error);
      
    }
  }

  render ()
  {
  return (
    <div className="App">
      <input type='text' value={this.state.bookTitleInput} placeholder='Enter book title' onChange={async (e) => this.setState({bookTitleInput: e.target.value})}/>
      <button onClick={this.handleButtonClick}>Get Info</button>
      <Books bookInfo={this.state.bookInfo}/>
    </div>
  );
}
}

//#endregion

export default App;
