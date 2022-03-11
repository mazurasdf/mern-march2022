import React, { useState } from "react";

const SimpleForm = (props) => {
    const [form, setForm] = useState({
        flavor: "",
        sauce: "",
        topping: "",
        whipped: false
    })

    const onChangeHandler = (event) => {
        // console.log(event.target.name + " " + event.target.value);
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(form);
    }

    const lengthValidator = (input, num) => {
        // if(input.length < num){
        //     return false;
        // }
        // else{
        //     return true;
        // }
        return input.length >= num;
    }

    const allValid = (inputs) => {
        return lengthValidator(inputs.flavor,5) && lengthValidator(inputs.sauce,8);
    }

    return(
        <div className="w-25 p-3 border border-dark mx-auto my-3">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label className="form-label">Flavor</label>
                    <input name="flavor" type="text" className="form-control" onChange={onChangeHandler}/>
                    {lengthValidator(form.flavor, 5) || form.flavor.length === 0 ? "" : <span className="alert-danger">You need at least 5 characters!</span>}
                    {/* {lengthValidator(form.flavor, 5) || !formStarted ? "" : <span className="alert-danger">You need at least 5 characters!</span>} */}
                </div>

                <div className="form-group">
                    <label className="form-label">Sauce</label>
                    <input name="sauce" type="text" className="form-control" onChange={onChangeHandler}/>
                    {lengthValidator(form.sauce, 8) || form.sauce.length === 0 ? "" : <span className="alert-danger">You need at least 8 characters!</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">Topping</label>
                    <select name="topping" className="form-select" onChange={onChangeHandler}>
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
                    <input name="whipped" type="checkbox" className="form-check-input" onChange={onChangeHandler}/>
                </div>

                {/* <marquee><input type="submit" className="btn btn-primary btn-lg"/></marquee> */}
                {
                    allValid(form)
                        ? <input type="submit" className="btn btn-primary btn-lg"/>
                        : <input type="submit" className="btn btn-primary btn-lg" disabled/>
                }
            </form>
        </div>
    )
}

export default SimpleForm;