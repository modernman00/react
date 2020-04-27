import React from 'react'


function Counter2({name, count, decrease, increase}) {
    return (
        <div>

            <div className='container'>

                <h1> {name} clicks : {count} times

                    <button className='btn btn-primary mt-2 ml-2' onClick={decrease}> Decrease Count</button>



                    <button className='btn btn-primary mt-2 ml-2'
                        onClick={increase}> Increase Count</button>

                </h1>
            </div>
            
        </div>
    )
}

export default Counter2
