import './App.css';
import photo from './profile/Profile.png'

import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "Skuizi",
      bio: "The next CGI GOD",
      imgSrc: photo,
      profession: "chofer jarya"
      },
      time: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.state.time+1}), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  state = {

    Person: {
      fullName: "Skuizi",
      bio: "The next CGI GOD",
      imgSrc: photo,
      profession: "chofer jarya"
    },

    shows: false
  };

  toggle = () => this.setState({ ...this.state, shows: !this.state.shows })

  render() {
    return (
      <>
        {this.state.shows && (
          <div className="App" style={{backgroundColor:"rgb(255, 255, 255)"}}>
             <img src={this.state.Person.imgSrc} style={{ width: 350, paddingTop: 15}} className="photo" alt="" />
            <div className="fullName" style={{fontSize: 40, color:'grey' }}> {this.state.Person.fullName}</div>
            <div className="bio" style={{ color: "skyblue", fontSize: 35 }}>{this.state.Person.bio}</div>
            <div className="profession" style={{  fontSize: 37, color:'grey'}}>{this.state.Person.profession}</div>
            <h6 style={{color:'skyblue'}}>The last component was mounted since : {this.state.time}s</h6>
          </div>
        )}
        <button  onClick={this.toggle} className="btn" >My profile </button>
      </>
    )
  }
}
export default App;