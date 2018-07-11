import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ApprovedMedia from "./ApprovedMedia";
import '../styles/Navbar.css';


export default class Navbar extends Component {

  render() {
    return (
     <ul id="nav">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/bio">About</NavLink></li>
        <li><NavLink to="/tour">Tour</NavLink></li>
        <li className="dropdown">Media
          <div className="dropdown-content">
            <div><NavLink to="/approvedmedia">Approved Media</NavLink></div>
            <div><NavLink to="/video">Video</NavLink></div>
          </div>
        </li>
        <li><NavLink to="/merch">Shop</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
    )
  }
}