// file displays weather values to the screen
import React from 'react'

const Weather=(props)=>{
    return(
        // put weather condition inside the div block
        <div>
            {
                props.country && props.city && 
                <p className="weather__key">
                    Location: 
                    <p className="weather__value">  
                        {props.city}, {props.country}
                    </p>                    
                </p> 
            }
            
            {
                props.temperature && 
                <p className="weather__key">
                    Temperature: 
                    <p className="weather__value">  
                        {props.temperature}
                    </p>
                </p>
            }

            {
                props.main && 
                <p className="weather__key">
                    Conditions:  
                    <p className="weather__value">  
                        {props.main}
                    </p>
                </p>
            }

            {
                props.error && 
                <p className="weather__error">
                    {props.error}
                </p>
            }

        </div>
    )
}

export default Weather;