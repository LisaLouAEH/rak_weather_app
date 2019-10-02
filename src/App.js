// this file is the main script of the app. It is used as a controller, wich call the API, 
// prepares datas and calls the vues of the app such as "form", "title", "weather"etc stored in /components.

import React from 'react' 
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component{
    // the default states
    state = {
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        error: undefined,
    }
    // setting current values
    
    // interact with the API
    getWeather = async (e) =>{
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_key = "c111b3ab497e9f938496993bd1fd882c";
      
      // call the API key to get the datas
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
      const response = await api_call.json();
      console.log(response);
      
      // the 'if' condition treats empty fields errors
      if(city && country){
        this.setState({
            city: response.name,
            country: response.sys.country,
            temperature: response.main.temp,
            description: response.weather[0].description,
            error: ""
        })
      }else{
          this.setState({
              error: "please enter a value within both fields"
          })
      }
      
    }

    render(){
        return(
            // add components inside the div section
            <div>
               <Titles />
               <Form loadWeather={() => this.getWeather}/>
               <Weather 
                        city={this.state.city}
                        country={this.state.country}
                        temperature={this.state.temperature}
                        description={this.state.description}
                        error={this.state.error}
                /> 
            </div>
        )
    }
}


export default App;
