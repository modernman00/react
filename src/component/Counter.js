import React, { Component } from 'react'
import Counter2 from './Counter2';
import UseHoc from './Hoc'


class Counter extends Component {
    // we need a count state to keep the counter value so create a constructor
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
       // this.countInc = this.countInc.bind(this);
    }

    // countInc =()=> {

    //     this.setState((prevState)=>{

    //         return {
    //             count : prevState.count + 1
    //         }

    //     })
        
    // }

  /*     countInc = () => {
        this.setState({
            title : this.state.title + 1
        })
    } */

    decreaseInc = () => {
        this.setState( (prevState)=>{
            return {
                count: prevState.count - 1
            }
        })
    }

  
    render() {
        return (
            <Counter2 
            //realCount = {this.state.count}
            decrease = {this.decreaseInc}
           // increase = {this.countInc}
            />
        )
    }
}

export default UseHoc(Counter)
