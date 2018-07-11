import React, { Component } from 'react';
import '../styles/ApprovedMedia.css';

class ApprovedMedia extends Component {
  render() {
    return (
      <div id="approved-media-wrapper">
        <div id="approved-images">
            <h3>*Click Image to Download</h3>
            <div id ="image-wrapper">
              <a href="../approvedMedia/Paul_Nelson_1.jpg" download>
                <img src={require("../approvedMedia/Paul_Nelson_1.jpg")}/>
              </a>
              <a href="../approvedMedia/Paul_Nelson_2.jpg" download>
                <img src={require("../approvedMedia/Paul_Nelson_2.jpg")}/>
              </a>
              <a href="../approvedMedia/Paul_Nelson_Poster_1.jpg" download>
                <img src={require("../approvedMedia/Paul_Nelson_Poster_1.jpg")}/>
              </a>
              <a href="../approvedMedia/Paul_Nelson_Poster_2.jpg" download>
                <img src={require("../approvedMedia/Paul_Nelson_Poster_2.jpg")}/>
              </a>
            </div>
        </div>
      </div>
    );
  }
}

export default ApprovedMedia;
