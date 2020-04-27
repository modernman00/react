import React from "react";


const Nameit = (props)=> {
    const {name, web} = props;
    return <h1> Family name: {name}, Professional: {props.id}: website: {web}</h1>
}
export default Nameit