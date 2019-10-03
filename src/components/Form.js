// this file displays the setting form to the screen
import React from 'react'

const Form = props =>{
    return(
        
        <form className="column" onSubmit={props.loadWeather()}>
            <input type="text" name="city" placeholder="city..."/>
            <input type="text" name="country" placeholder="country..."/>
            <button className="valid_button">Add to the list</button>
        </form>
    )
}

export default Form;