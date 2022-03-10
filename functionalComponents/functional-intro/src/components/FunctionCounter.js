import React, {useState} from 'react';

const FunctionCounter = (props) => {
    const {text} = props;
    const [counter,setCounter] = useState(0);
    const [hover, setHover] = useState(false);

    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    const onHover = () => {
        setHover(!hover);
    }

    const hoverStyle = {
        backgroundColor: "black",
        color: "white"
    }

    return(
        <div onMouseEnter={onHover} onMouseLeave={onHover} style={hover ? hoverStyle : {}} className='border border-dark w-25 mx-auto my-2'>
            <h1>Count: {counter}</h1>
            <button onClick={increaseCounter} className='btn btn-primary btn-lg'>click me!</button>
            <p><em>this is a functional component</em></p>
            <h3>{props.text}</h3>
            {/* <h3>{text}</h3> */}
        </div>
    )
}

export default FunctionCounter;