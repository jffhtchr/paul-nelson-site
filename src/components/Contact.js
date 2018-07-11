import React, { Component } from 'react';
import "../styles/Contact.css"

class Contact extends Component {
  render() {
    return (
      <div id="contact-container">
        <div id="contact-content">
          <div className="contact-item">
            <h4>Management</h4>
            <p>Bullseye Management</p>
            <p>PO Box 3207</p>
            <p>Stamford, Ct. 06905</p>
            <a href="http://www.bullseyemanagement.com" target="blank"><p>www.bullseyemanagement.com</p></a>
          </div>

          <div className="contact-item">
            <h4>Booking - North America</h4>
            <p>Highway Key Touring Artists</p>
            <p>Bobbi Llewellyn</p>
            <p>(+ 1) 586 420 4728 USA</p>
            <a href="mailto:bobbillewellyn7@gmail.com" target="blank"><p>bobbillewellyn7@gmail.com </p></a>
          </div>

          <div className="contact-item">
            <h4>Booking - International</h4> 
            <p>Highway Key Touring Artists</p>
            <p>Casey Scott</p>
            <a href="mailto:hwykey@gmail.com" target="blank"><p>hwykey@gmail.com</p></a>
          </div>

          <div className="contact-item">
            <h4>Publicity Inquiries</h4>
            <p>Lappen Enterprises</p>
            <p>John Lappen</p>
            <a href="mailto:john@lappenenterprises.com" target="blank"><p>john@lappenenterprises.com</p></a> 
          </div>

          <div className="contact-item">
            <h4>Label - Sony Music Group</h4>
            <a href="https://www.sonymusic.com/" target="blank"><p>https://www.sonymusic.com/</p></a>
          </div>

        </div>  
      </div>
    );
  }
}

export default Contact;

