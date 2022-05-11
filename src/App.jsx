import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { render } from '@testing-library/react';
import myImage from "./MyPicture.jpg"
class App  extends Component {
  state = {
    Person: {
      fullName: "My name is : Imen Bouzaya",
      bio: "I just love traveling",
      imgSrc: myImage,
      profession: "I'm a teacher",
    },
    digit : 0,
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
componentDidMount = ()=>{
  console.log(this.state.digit)
  setInterval(( ) => {
    let d=this.state.digit + 1
    this.setState({
      digit:d
    });},1000);
};

  render() {
    return (
      <>
        {this.state.show && (
          <>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio}</h1>
            {<img src={this.state.Person.imgSrc} alt=""></img> }
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
        <div> counter : {this.state.digit}</div>
      </>
    );
  }
}

export default App;
