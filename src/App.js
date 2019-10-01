import React from 'react' 
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component{

    getWeather = async (e) =>{
      e.preventDefault();
      const api_key = "c111b3ab497e9f938496993bd1fd882c";
      // call the API key to get the datas
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${api_key}`);
      const response = await api_call.json();
      console.log(response);
    }
    render(){
        return(
            // add components inside the div section
            <div>
               <Titles />
               <Form loadWeather={() => this.getWeather}/>
               <Weather />
               
            </div>
        )
    }
}


export default App;
