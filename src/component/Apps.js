import React from 'react';
import Nav from './Nav';
import Dayrate from './Dayrate';
import Eventhandler from './Eventhandler';
import ParentChild from './ParentChild';
import  Counter  from "./Counter";
import Hover from './Hover';



const Apps = () => {

    return (

        <div>

            <Nav />

            < Dayrate />

            <Eventhandler />

          

            <br></br>

            <ParentChild />

            <br></br>

            <Counter/> 
            <br></br>
            
             <Hover/>

        </div>

    )
        
}
        
export default Apps