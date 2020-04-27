import React, { Component } from 'react'
import ChildParent from './ChildParent';

class ParentChild extends Component {
    constructor() {
        super()
        this.state = {
            parentName: 'OLAOGUN',
            headers: 'PARENT CHILD RELATIONSHIP'
        }
// bind the function to access the constructor
    this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childname){ 
        this.setState({
            parentName: 'AKINDURO'
        })
        alert(`Hello ${this.state.parentName} the father of ${childname}`)  
    }

    render() {
        return (
            <div>
                < ChildParent greetHandler = {this.greetParent} header={this.state.headers} />    
            </div>
        )
    }
}

export default ParentChild
