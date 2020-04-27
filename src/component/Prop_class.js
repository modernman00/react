import React, { Component } from 'react';
import Nameit from './Nameit';

class Prop_class extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (

            <div>
                <Nameit name='Olawale Olaogun' id='Procurement' web='www.showalinvest.com' />
                <Nameit name='Ajibike Olaogun' id='Finance Enterprenuer' />
             
                <Nameit name='Ekudayo Olaogun' id='Logistics Professional' />
            </div>


            
        );
    }
}

export default Prop_class;
