import React, { Component } from 'react'

class Dayrate extends Component {
    render() {
        return (
            
            <div className="container">
                <form>
                <label> Please ensure your day Rate</label> <br></br>

                <input type='number' className='form-control'></input>
                <br></br>

                <label> Contract length</label> <br></br>

                <input type='number' className='form-control'></input>
                <br></br>

                <label> Are you cover by IR35?</label>

                <select className='form-control'>
                    <option value='SELECTED'>
                        Selected
                        </option>
                    <option value='YES'>
                        Yes
                        </option>
                    <option value='No'>
                        No
                            </option> 
                    <option value='Unsure'>
                        Unsure
                        </option>
                </select>
               </form>  
            </div>
           
        )
    }
}

export default Dayrate
