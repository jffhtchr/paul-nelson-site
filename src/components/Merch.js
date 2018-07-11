import React, { Component } from 'react';
import "../styles/Merch.css"

class Merch extends Component {
  render() {
    return (
      <div id="merch-wrapper">
        <div id="merch-container">   

          <div className="merch-item">
            <a href="https://www.amazon.com/Badass-Generation-Limited-Digipak-Nelson/dp/B017VORJFQ" target="blank">
              <div className ="merch-image">
                <img src={require("../images/cassette.jpg")}/>
              </div>
              </a>
              <div className="merch-text">
                <h3>Badass Generation Album</h3>
                <p>The Paul Nelson Band</p>
              </div>  
          </div>

          <div className="merch-item">
              <div className ="merch-image">
              <a href="https://www.2ndwindprinting.com/online-store/Paul-Nelson-Winged-Guitar-p94380941" target="blank">
                <img src={require("../images/shirtOne.jpg")}/>
                </a>
              </div>
              <div className="merch-text">
                <h3>PNB T-Shirt</h3>
                <p>S - M - L - XL - XXL</p>
              </div>  
          </div>
          
          <div className="merch-item">
            <a href="https://www.2ndwindprinting.com/online-store/Paul-Nelson-Cassette-p95026982" target="blank">
            <div className ="merch-image">
                <img src={require("../images/shirtTwo.jpg")}/>
             </div>
             </a>
            <div className="merch-text">
              <h3>Badass Generation T-Shirt</h3>
              <p>S - M - L - XL - XXL</p>
            </div>  
          </div>
                    
        </div>
      </div>
    );
  }
}

export default Merch;
