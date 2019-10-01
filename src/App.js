import React from 'react' 
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

class App extends React.Component{
    render(){
        return(
            // add components inside the div section
            <div>
               <Titles />
               <Form />
               <Weather />
            </div>
        )
    }
}

export default App;
