import React from 'react'

function ChildParent(props) {
    return (
        <div>

            <label><b>{props.header}</b></label>
            <br></br>

            

            <button onClick={()=>props.greetHandler('child')}> 
                Greet Parent
            </button>

        </div>
    )
}

export default ChildParent
