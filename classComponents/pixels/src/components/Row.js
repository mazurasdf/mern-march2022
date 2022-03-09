import React, {Component} from 'react';
// import Pixel from './Pixel';
import ColorPixel from './ColorPixel';

class Row extends Component{
    render(){
        return(
            <div className='container d-flex justify-content-center'>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
                <ColorPixel/>
            </div>
        )
    }
}

export default Row;