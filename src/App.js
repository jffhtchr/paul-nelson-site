import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './styles/App.css';
import Bio from "./components/Bio";
import Contact from "./components/Contact";
import Merch from "./components/Merch";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Tour from "./components/Tour";
import ApprovedMedia from "./components/ApprovedMedia";
import Video from "./components/Video";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router >
      <div id="App">
       <Navbar />
       <div className='main-content'>
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/tour" component={Tour} /> 
          <Route exact path={"/approvedmedia"} component={ApprovedMedia} />         
          <Route exact path={"/video"} component={Video} />         
          <Route exact path="/merch" component={Merch} />
          <Route exact path="/contact" component={Contact} /> 
          <Route exact path="/" component={Title} /> 
       </div>
       <Footer />
      </div>
      </Router>  
    );
  }
}

export default App;
