import React, { Component} from 'react';

export default class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {
            time: new Date()
        }
    }
    componentDidMount(){
        this.timerId = setInterval(
            () =>this.tick(), 1000

        );
    }
    componentWillUnmount(){
        clearInterval(this.timerId)
    }
    tick() {
        this.setState({
            time: new Date()
        });
    }
    render(){
        return (
        <p style={clock} >It is now: {this.state.time.toLocaleTimeString()}</p>
         
         );
    }
}


const clock =  {
    color:"green"

}

