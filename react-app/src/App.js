import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';
import Country from './Country';
//#region FirstTask
// function App() {

//   const [countryInfo, setCountryInfo] = useState({})
//   const [countryInput, setInputValue] = useState('');


//   // Я старалась найти нормальный API, но не смогла, этот один из более менее
//   const handleGetCityInfoClick = async () =>
//   {
//     const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryInput}`;
//     const options = {
// 	  method: 'GET',
// 	  headers: {
// 		  'X-RapidAPI-Key': '5d1f93e7fcmsh31cd902310f3596p15d104jsn5981f11710d4',
// 		  'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	  }
// };

// try {
//   const response = await fetch(url, options);

//   if (response.status === 200) {
//     const result = await response.json();
//     setCountryInfo(result);
//     console.log(result);
//   } else {
//     alert('Wrong Input');
//   }
// } catch (error) {
//   console.error(error);
// }

// }

// return (
//   <div className="App">
//     <input type='text' value={countryInput} placeholder='Enter country code' onChange={async (e) => setInputValue(e.target.value)}/>
//     <Country countryInfo={countryInfo}/>
//     <button onClick={handleGetCityInfoClick}>Get Info</button>
//   </div>
// );

// }
//#endregion

//#region SecondTask

class App extends Component {
  constructor()
  {
    super()
    this.state = {
      countryInfo: {},
      countryInput: ""
    };
  }


  handleGetCityInfoClick = async () => {
    const url = `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${this.state.countryInput}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5d1f93e7fcmsh31cd902310f3596p15d104jsn5981f11710d4',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);

      if (response.status === 200) {
        const result = await response.json();
        console.log(result);
        this.setState({countryInfo: result});
      } else {
        alert('Wrong Input');
      }
    } catch (error) {
      console.error(error);
    }
    

  }
  render() {
    
    return (
      <div className="App">
        <input type='text' value={this.state.countryInput} placeholder='Enter country code' onChange={(e) => this.setState({countryInput: e.target.value})} />
        <Country countryInfo={this.state.countryInfo} />
        <button onClick={this.handleGetCityInfoClick}>Get Info</button>
      </div>
    );
  }
}

//#endregion

export default App;
