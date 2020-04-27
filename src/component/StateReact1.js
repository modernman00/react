import React, { Component } from 'react';

class StateReact1 extends Component {
    constructor() {
        super() //required
        this.state = {
            //state is a reserve keyword in react
            //created a state object
            //then the property which is message
            message: 'Welcome to my page'
        }
    }

    msgChane() {
        this.setState ({
          message: 'Thank you for clicking'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={ () => this.msgChane() }> Subscribe</button>
            </div>
        )
    }
}

export default StateReact1;