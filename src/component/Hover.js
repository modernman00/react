import React, { Component } from 'react'
import Hover2 from './Hover2'
import UseHoc from './Hoc'

class Hover extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
      
    }

    componentDidMount(){
        this.setState({
            count: 1
        })
    }

/*    increase = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
 */
    decrease = () => {
        this.setState({
            count : this.state.count - 1
        })
    }



    render() {
        return (
            <div>
                <Hover2 decrease={this.decrease} />
                
            </div>
        )
    }
}

export default UseHoc(Hover)
