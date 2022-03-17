import React, { useContext, useState } from "react";
import WordContext from "../contexts/WordContext";

const Guess = (props) => {
    const [guess, setGuess] = useState(props.guess.toUpperCase());

    const {answer} = useContext(WordContext);

    return(
        <div className="w-25 guess my-4 mx-auto d-flex justify-content-between">
        {
            guess.split("").map((letter, i)=>{
                const style = {
                    backgroundColor: answer[i] === guess[i] ? "green" : answer.includes(guess[i]) ? "goldenrod" : "rgb(97, 97, 97)"
                }

                return <div className="letter" key={i} style={style}>
                    {letter}
                    </div>
            })
        }
        </div>
    )
}

export default Guess;