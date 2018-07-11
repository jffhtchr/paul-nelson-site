import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
          <ul id="social-icons">
            <a href="https://www.facebook.com/paulnelsonofficial/" target="blank"><li><img className="icon" src={require("../icons/fb48.png")}/></li></a>
            <a href="https://www.instagram.com/paulnelsonofficial/" target="blank"><li><img className="icon" src={require("../icons/insta48.png")}/></li></a>
            <a href="https://www.youtube.com/channel/UCgGdcO-vkv-hgagrVQgETUQ" target="blank"><li><img className="icon" src={require("../icons/yt48.png")}/></li></a>
          </ul>
      </div>
    );
  }
}

export default Footer;

