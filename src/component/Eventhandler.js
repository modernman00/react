import React from 'react'

function Eventhandler() {

    const display = () => console.log( "We are very good")
    

    return (
        <div className='container'>

            <button className='btn btn-primary' onClick={display}>Click me</button>
            
        </div>
    )
}

export default Eventhandler
