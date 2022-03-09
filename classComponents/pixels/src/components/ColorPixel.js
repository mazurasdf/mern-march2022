import React, {Component} from 'react';
var randomColor = require('randomcolor');

class ColorPixel extends Component{
    constructor(props){
        super(props);
        this.state = {
            color: "white"
        }
    }

    onClickHandler = () => {
        console.log("trying to flip state");
        
        this.setState({
            color: randomColor()
        })
    }

    render(){
        const colorStyle = {
            backgroundColor: this.state.color
        }

        return(
            <div style={colorStyle} onMouseOver={this.onClickHandler} className="pixel"></div>
        )
    }
}

export default ColorPixel;