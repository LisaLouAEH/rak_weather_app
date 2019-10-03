import React from 'react';



const Widget = (props) => {
  return (
    <div className="widget_container column">
        <div className="weather__value row"> 
          <div className="Weather_info">
            <h3>Ville:</h3>
          </div>

          <div className="Weather_info">
            <p>{props.cityName}</p>
          </div>
        </div>

        <div className="weather__value row">
            <div className="Weather_info">
              <h3>Pays:</h3>
            </div>

            <div className="Weather_info">
              <p>{props.cityCountry}</p>
            </div>
        </div>

        <div className="weather__value row"> 
          <div className="Weather_info">
            <h3>Temp °:</h3>
          </div>

          <div className="Weather_info">
            <p>{props.cityTemp}</p>
          </div>    
        </div>
       
      {/* <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} className="" alt="" /> */}
    </div> 
  );
}

export default Widget;