import React, { Component } from 'react';
import '../styles/Title.css';


class Title extends Component {
  render() {
    return (
      <div id="title-page">
        <img id="paul-img" src={require("../images/ContactPaul.png")} />
        <div id="logo">
          <div id="logo-holder">
            <div id="paul"></div>
            <div id="nelson"></div>
          </div>
          <h4>Grammy Award Winning Guitarist {"&"} Producer</h4>
        </div>  
      </div>
    );
  }
}

export default Title;
