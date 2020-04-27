import React from 'react'


function Hover2({name, count, increase, decrease}) {
    return (
        <div className='container'>

            <p> {name} hovers : {count} times </p>

            <button className='btn btn-primary ml-3' onMouseEnter ={decrease}>Decrease - Mouse Enter</button>

            <button className='btn btn-primary ml-3' onMouseOver={increase}>Increase - Mouse Enter</button>
            
            
        </div>
    )
}

export default Hover2
