import React from 'react'

function UseHoc (OriginalComponent) {
    return class extends React.Component {
         constructor(props){
        super(props)
        this.state = {
            count:0,
            name: 'Olawale'
        }

    }
      countInc = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
          return  < OriginalComponent name ={this.state.name}  count={this.state.count} increase={this.countInc} />
      }
    }
    
}

export default UseHoc
