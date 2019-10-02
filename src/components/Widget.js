import React from 'react';


const Widget = (props) => {
  return (
    <div>
        <span className="weather__value"> Ville: {props.cityName}</span>
        <span className="weather__value"> Pays: {props.cityCountry}</span>
        <span className="weather__value"> Temp: {props.cityTemp}</span>       
    {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="" alt="" /> */}
    </div> 
  );
}

export default Widget;