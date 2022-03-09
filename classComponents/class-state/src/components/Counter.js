import React, {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }

    increaseCounter = () => {
        // console.log("clicked!!");
        // this.state.counter++;DOES NOT WORK
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render(){
        const {text} = this.props;
        // const {counter} = this.state;

        return(
            <div className={'box ' + this.props.className}>
                {text}
                <h1>{this.state.counter}</h1>
                <button onClick={this.increaseCounter}>click me!!</button>
            </div>
        )
    }
}

export default Counter;