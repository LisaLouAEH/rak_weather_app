// this file displays weather values to the screen
import React from 'react'


const Weather=(props)=>{
    return(
        // put weather condition inside the div block
        <div>
            {props.country && props.city && <p>Location: {props.city},    {props.country}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.description && <p>Conditions:  {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    )
}

export default Weather;