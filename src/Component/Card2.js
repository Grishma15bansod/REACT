import React, { Component } from 'react'
const abc={
    color:"blue"
}

export default class Card2 extends Component {
    render() {
        return (
            <div>
                <div className='par2'>
              <div className='box2'>
                <h1>This is created using Class component</h1>
                <p>This is done using external CSS</p>
                <p style={abc}>This is done using inline CSS</p>
             </div>
             </div>
            </div>
        )
    }
}
