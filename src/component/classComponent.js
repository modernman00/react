import React, { Component } from 'react';

class classComponent extends Component {
   /* constructor(props) {
        super(props);
        this.state = {  };
    }*/
    render() {
        return (

            <h1> {this.props.name} {this.props.id}</h1>
            
        );
    }
}

export default classComponent;