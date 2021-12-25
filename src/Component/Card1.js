import React from 'react'
const xyz={
    color:"red"
}
function Card1() {
    return (
        <div>
            <div className='par1'>
            <div className='box1'>
                <h1>This is created using function component</h1>
                <p>This is done using external CSS</p>
                <p style={xyz}>This is done using inline CSS</p>
            </div>
            </div>
        </div>
    )
}

export default Card1
