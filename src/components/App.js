import React, { Component } from 'react';
//import logo from './logo.svg';

import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/gtok.jpeg'
import Title from './Title';

//import './App.css';

class App extends Component {

  state = { displayBio : false}

  toggleDisplayBio = () => {
    this.setState({ displayBio : !this.state.displayBio });
  }
/*
   readMore () {
    //console.log('readMore this',this)
    this.setState({displayBio : true });
    //this.state.displayBio = true;
   }

   showLess() {
    this.setState({displayBio : false });
   }
*/

   toggleDisplayBio(){ 
     this.setState({ displayBio : !this.state.displayBio }) ;
    }

  render() {
    /*let bio = this.state.displayBio ? (
      <div>
        <p>I live in İzmir, and code every day</p>
        <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
        <p>Besides coding, I also love traveling and Music!</p>
      </div>
    ) : null ;
    /*
    if (!this.state.displayBio){
      bio = null;
    }*/

     return (
      <div className="App">
        <img src={profile} alt='profile' className="profile"/>
        <h1>Ahoy!</h1>
        <p>My name is Gökhan.</p>
        <Title/>
        <p>I'm always looking forward to working on meaninful projects.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in İzmir, and code every day</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love traveling and Music!</p>
              <button onClick= {this.toggleDisplayBio} >Show Less</button>
            </div>
          ) :  <div>
                <button onClick= {this.toggleDisplayBio} >Read More</button>
              </div> 
        }

        <hr/>
        <Projects/>
        <hr/>
        <SocialProfiles/>
 
      </div>
    );
  }
}


export default App;
