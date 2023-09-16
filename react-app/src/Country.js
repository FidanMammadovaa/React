import React, { Component } from "react";

//#region FirstTask
// function Country(props)
// {
//     if (props.countryInfo.data != null)
//     {
//     const { capital, code, callingCode, name, numRegions, flagImageUri} = props.countryInfo.data
//     let countryImage = new URL(flagImageUri);


//     const imageStyle = {
//         width: "100px", 
//         height: "auto", 
//       };

//     return (
//         <div>
//             <h1>Code: {code}</h1>
//             <h1>Name: {name}</h1>
//             <h1>Capital: {capital}</h1>
//             <h1>Calling code: {callingCode}</h1>
//             <h1>Number of regions: {numRegions}</h1>
//             <img style={imageStyle} src={countryImage} alt={name}></img>
//         </div>
//     );
//     }
// }
//#endregion


//#region SecondTask
class Country extends Component
{
    
    render()
    {
        if (this.props.countryInfo.data != null)
            {
            const { capital, code, callingCode, name, numRegions, flagImageUri} = this.props.countryInfo.data
            let countryImage = new URL(flagImageUri);
        
        
            const imageStyle = {
                width: "100px", 
                height: "auto", 
              };
        
            return (
                <div>
                    <h1>Code: {code}</h1>
                    <h1>Name: {name}</h1>
                    <h1>Capital: {capital}</h1>
                    <h1>Calling code: {callingCode}</h1>
                    <h1>Number of regions: {numRegions}</h1>
                    <img style={imageStyle} src={countryImage} alt={name}></img>
                </div>
            );
            }
    }
    
}

//#endregion

export default Country;