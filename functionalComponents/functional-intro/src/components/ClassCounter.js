import React, {Component} from 'react';

class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            hover: false
        }
    }

    increaseCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onHover = () => {
        this.setState({
            hover: !this.state.hover
        })
    }

    render(){
        const {text} = this.props;
        const hoverStyle = {
            backgroundColor: "black",
            color: "white"
        }

        return(
            <div onMouseEnter={this.onHover} onMouseLeave={this.onHover} style={this.state.hover ? hoverStyle : {}} className='border border-dark w-25 mx-auto my-2'>
                <h1>Count: {this.state.counter}</h1>
                <button onClick={this.increaseCounter} className='btn btn-primary btn-lg'>click me!</button>
                <p><em>this is a class component</em></p>
                <h3>{this.props.text}</h3>
                {/* <h3>{text}</h3> */}
            </div>
        )
    }
}

export default ClassCounter;