import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Pokemon = (props) => {
    const [imgURL, setImgURL] = useState("");
    const {name} = useParams();

    useEffect(()=>{
        console.log("page loaded, useEffect running");

        axios.get("https://pokeapi.co/api/v2/pokemon/" + name)
            .then(res => {
                console.log(res);
                setImgURL(res.data.sprites.front_default);
            })
            .catch(err=>console.log(err))

        return(()=>{
            //anything in here will run only when the component dismounts
            console.log("pokemon component dismounted");
        })
    },[name])

    return(
        <div>
            <img src={imgURL} alt={name}/>
            <h1>{name}</h1>
        </div>
    )
}

export default Pokemon;