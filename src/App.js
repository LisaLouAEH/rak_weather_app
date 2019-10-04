// this file is the main script of the app. It is used as a controller, wich call the API, 
// prepares datas and calls the vues of the app such as "form", "title", "weather"etc stored in /components.

import React from 'react' 
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import Footer from './components/Footer';
import Liste from './components/Liste';
import Widget from './components/Widget';
import ApiKey from './components/ApiKey';
import './css/Widget.css';

class App extends React.Component{
    // the default states is empty array to store every cities the user wishing to know the weather
    state = {
        liste: [],
        home:true
    }
    
    navigationHandler = () => {
        if (this.state.home){
            this.setState({home:false})
        }else{
            this.setState({home:true})
        }
    }
    
    // interact with the API
    getWeather = async (e) =>{
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
        const api_key = ApiKey;
      
      // call the API key to get the datas
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`);
      const response = await api_call.json();
      console.log(response);
      
      // the 'if' condition treats empty fields errors
      if(city && country){
        const tempListe = [...this.state.liste]
        tempListe.push(
            {city: response.name,
            country: response.sys.country,
            temperature: response.main.temp,
            description: response.weather[0].description,
            icon: response.weather[0].icon,
            error: ""}
            )
        console.log("le tableau que je recup: "+tempListe);
        this.setState({liste:tempListe})
      }else{
          this.setState({
              error: "please enter a value within both fields"
          })
      }
      
    }

    render(){

        if(this.state.home){
            console.log("home ?");
            return(
                <div className="main__container column">
{/* DISPLAY THE HEADER*/}
                    <div className="container-fluid row">
                        <div className="main__title">
                            <Titles />
                        </div>
                        <div className="main__menu row">
                            <button className="menu_button"  onClick={this.navigationHandler}> Settings </button>
                        </div>
                    </div>

{/* DISPLAY in HOME as many weather widget that the user entered in the setting form*/}
                    <div className="row">
                        {this.state.liste.map( element => <Widget cityName={element.city} cityTemp={element.temperature} cityCountry={element.country}/>)} 
                    </div>
{/* DISPLAY THE FOOTER*/}
                    <div className="footer__container container-fluid">
                        <Footer/>
                    </div>
                </div>               
            )
        }else{
            console.log("settings ?");
            return(
                <div className="main__container column">
{/* DISPLAY THE HEADER*/}
                    <div className="container-fluid row">
                        <div className="main__title">
                            <Titles />
                        </div>
                        <div className="main__menu row">
                            <button  className="menu_button"  onClick={this.navigationHandler}> Show  me weather </button>
                            {/* <button onClick={this.navigationHandler}> Settings </button> */}
                        </div>
                    </div>
{/* DISPLAY THE SETTING FORM*/}
                    <div className="setting_block column">
                        <Form loadWeather={() => this.getWeather}/>
                    </div>

{/* DISPLAY THE user choices list*/}
                    <Liste cities={this.state.liste}/>

{/* DISPLAY THE FOOTER*/}
                    <div className="footer__container container-fluid">
                        <Footer/>
                    </div>
                </div>               
            )
        }        
    }
}


export default App;
