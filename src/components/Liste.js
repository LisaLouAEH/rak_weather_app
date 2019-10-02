// this files displays titles and notice to the screen
import React from 'react'

const Liste = (props) =>{
    return(
        <div>
            {props.cities.map( element => {
                return (
                    <div>
                        <span className="weather__value"> Ville: {element.city}</span>
                        <span className="weather__value"> Pays: {element.country}</span>
                        <button>X</button>       
                    </div>)
            })}
        </div>
    )
}

export default Liste;