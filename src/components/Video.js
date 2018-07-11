import React, { Component } from 'react';
import '../styles/Video.css';


class Video extends Component {
  render() {
    return (
      <div id="video-container">
        <div id = "video-wrapper">
          <div className='embed-container'>
            <iframe src='https://www.youtube.com/embed/iOoK3hnTZDM' frameBorder='0' allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
