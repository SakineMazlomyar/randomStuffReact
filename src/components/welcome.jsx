import React, {Component} from 'react';

export default class Welcome extends Component{
    constructor(props){
        super(props)
        this.state = {
            name:"sakine"
        }
    }

    componentDidMount(){
        this.changeName = setInterval(
            () => this.getRandomName(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.changeName)
    }
    getRandomName(){
        let randomNum = Math.floor(Math.random() * 10);
        switch(randomNum){
          case 0:
          this.setState({name: "Tuivi"});
          break;
          case 1:
          this.setState({name: "Sara"});
          break;
          case 2:
          this.setState({name: "Samer"});
          break;
          case 3:
          this.setState({name: "Ali"});
          break;
          case 4:
          this.setState({name: "Robert"});
          break;
          case 5:
          this.setState({name: "Ahmed"});
          break;
          case 6:
          this.setState({name: "Lars"});
          break;
          case 7:
          this.setState({name: "ALexander"});
          break;
          case 8:
          this.setState({name: "Henrik"});
          break;
          case 9:
          this.setState({name: "David"});
          break;
          default: 
          this.setState({name: "Ranch"});
    
        }
    }

    render() {
        return (<p style={{ backgroundColor:this.props.name}}>This is {this.state.name}</p>)
    }

}
