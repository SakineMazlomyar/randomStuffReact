import React, { Component } from 'react';
import Welcome from './welcome';


export default class Button extends Component {
  constructor(props){
    super(props)
    this.state = {
      color:"blue"
    }
  }
  
  componentDidMount(){
    this.getRandomColor = setInterval(
      () =>this.shuffle(),
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.getRandomColor)
  }

  shuffle(){
    let randomNumber = Math.floor(Math.random() * 10);
    switch(randomNumber){
      case 0:
      this.setState({color: "yellow"});
      break;
      case 1:
      this.setState({color: "grey"});
      break;
      case 2:
      this.setState({color: "black"});
      break;
      case 3:
      this.setState({color: "orange"});
      break;
      case 4:
      this.setState({color: "green"});
      break;
      case 5:
      this.setState({color: "white"});
      break;
      case 6:
      this.setState({color: "blue"});
      break;
      case 7:
      this.setState({color: "brown"});
      break;
      case 8:
      this.setState({color: "pink"});
      break;
      case 9:
      this.setState({color: "orchid"});
      break;
      default: 
      this.setState({color: "purple"});

    } 
    
  } 
  render() {
    return (
      <div>

        <button style={{backgroundColor:this.state.color}}>Click Here</button>
        <Welcome name={this.state.color}/>
      </div>
    );
  }
}

