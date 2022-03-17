import React, { useContext } from "react";
import WordContext from "../contexts/WordContext";

const Form = (props) => {
    const {form,setForm, guesses, setGuesses} = useContext(WordContext);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        setGuesses([...guesses, form]);
        setForm("");
    }

    return(
        <form onSubmit={onSubmitHandler} className="w-25 mx-auto m-5">
            <input value={form} onChange={(event)=>setForm(event.target.value)} type="text" className="w-100 form-control" placeholder="what's your guess?"/>

            <input type="submit" className="btn btn-info d-block mx-auto my-3"/>
        </form>
    )
}

export default Form;