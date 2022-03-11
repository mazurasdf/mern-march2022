import React, { useState } from "react";

const TraditionalForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [flavorError, setFlavorError] = useState("");
    const [sauce, setSauce] = useState("");
    const [sauceError,setSauceError] = useState("");
    const [topping, setTopping] = useState("");
    const [whipped, setWhipped] = useState(false);

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const submitMe = {flavor,sauce,topping,whipped};

        console.log(submitMe);

        // if(sauce.length < 6){
        //     setSauceError("you need at least 6 characters for sauce!");
        // }
        // else{
        //     setSauceError("");
        // }
    }

    const onFlavorHandler = (event) => {
        setFlavor(event.target.value);

        if(event.target.value.length < 5){
            setFlavorError("a flavor needs at least 5 characters!");
        }
        else{
            setFlavorError("");
        }
    }

    const onSauceError = (event) => {
        if(event.target.value.length < 6){
            setSauceError("you need at least 6 characters for sauce!");
        }
        else{
            setSauceError("");
        }
    }

    return(
        <div className="w-25 p-3 border border-dark mx-auto my-3">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label className="form-label">Flavor</label>
                    <input type="text" className="form-control" onChange={onFlavorHandler}/>
                    <span className="alert-danger">{flavorError}</span>
                </div>

                <div className="form-group">
                    <label className="form-label">Sauce</label>
                    <input type="text" className="form-control" onBlur={onSauceError} onChange={(event) => {setSauce(event.target.value)}}/>
                    <span className="alert-danger">{sauceError}</span>
                </div>

                <div className="form-group">
                    <label className="form-label">Topping</label>
                    <select className="form-select" onChange={(event) => {setTopping(event.target.value)}}>
                        <option>pecans</option>
                        <option>peanuts</option>
                        <option>cookie dough bits</option>
                        <option>brownies</option>
                        <option>french fries</option>
                        <option>pizza rolls</option>
                        <option>steak</option>
                        <option>grass</option>
                        <option>shoe</option>
                    </select>
                </div>

                <div className="form-check my-3">
                    <label className="form-check-label">Whipped Cream?</label>
                    <input type="checkbox" className="form-check-input" onChange={(event) => {setWhipped(event.target.checked)}}/>
                </div>

                <marquee><input type="submit" className="btn btn-primary btn-lg"/></marquee>
            </form>
        </div>
    )
}

export default TraditionalForm;