import React, { useEffect, useState } from 'react';

const PokeCard = (props) => {
    const [defaultURL, setDefaultURL] = useState("");
    const [shinyURL, setShinyURL] = useState("");
    const [hover, setHover] = useState(false);

    useEffect(()=>{
        console.log(`running useEffect for pokemon: ${props.pokemon}`)
        fetch("https://pokeapi.co/api/v2/pokemon/" + props.pokemon)
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                setDefaultURL(res.sprites.front_default);
                setShinyURL(res.sprites.front_shiny);
            })
            .catch(err=>console.log(err))
    },[props.pokemon])

    const flipHover = () => setHover(!hover);

    return(
        <div className="poke-card">
            <img onMouseEnter={flipHover} onMouseLeave={flipHover} src={hover ? shinyURL : defaultURL} alt={props.pokemon}/>
            <h2>{props.pokemon}</h2>
        </div>
    )
}

export default PokeCard;