import React, { Component } from 'react';
import '../styles/Bio.css';

class Bio extends Component {
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  } 

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    const stuff= document.getElementsByClassName('bio-img')
    for(let i = 0; i<stuff.length; i++){
      stuff[i].addEventListener('mouseenter', this.handleMouseIn)
      stuff[i].addEventListener("mouseleave", this.handleMouseOut)

    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    const stuff= document.getElementsByClassName('bio-img')
    for(let i = 0; i<stuff.length; i++){
      stuff[i].removeEventListener('mouseenter', this.handleMouseIn)
      stuff[i].removeEventListener('mouseleave', this.handleMouseOut)

    }
  };

  handleScroll(){
    const arrow = document.getElementById('down-arrow')
    const coords = arrow.getBoundingClientRect().y;
    const windowHeight = window.outerHeight;

    if(windowHeight/Math.abs(coords) > 4){
      arrow.style.visibility = 'hidden'
    }else{
      arrow.style.visibility = 'visible'
    }

  }

  handleMouseIn(evt){
    const footer = document.getElementById('footer-container')
    if(evt.target.id === "bio-img-three"){
      footer.classList.add('footer-reveal')
    }
    evt.target.children[0].classList.add("reveal")
  }

  handleMouseOut(evt){
    const footer = document.getElementById('footer-container')
    if(evt.target.id === "bio-img-three"){
      footer.classList.remove('footer-reveal')
    }
    evt.target.children[0].classList.remove("reveal")
  }


  render() {
    return (
      <div id="bio-container">
        <div id="parallax-container">
          <div id="bio-parallax">
            <div id="picture-gallery">
              <div className="bio-img" id="bio-img-one">
                <div className="bio-snippet">
                  Paul at the Grammy Awards
                </div>
              </div>
              <div className="bio-img" id="bio-img-five">
                <div className="bio-snippet">
                  Paul & Johnny Winter
                </div>
              </div>
              <div className="bio-img" id="bio-img-two">
                <div className="bio-snippet">
                  Paul & Buddy Guy.
                </div>
              </div>
              <div className="bio-img" id="bio-img-four">
                <div className="bio-snippet">
                  Paul Nelson Band @ The Waukesha Blues Festival
                </div>
              </div>
              <div className="bio-img" id="bio-img-three">
                <div className="bio-snippet">
                  Paul & Warren Haynes
                </div>
              </div>
              <div className="bio-img" id="bio-img-six">
                <div className="bio-snippet">
                  Paul & Slash
                </div>
              </div>
            </div>
          </div> 
          <div id="down-arrow">
            <h1>/\</h1>
          </div>
          <div id="bio-text">
            <br/>
            <p><span className="bold">Paul Nelson</span> received a Grammy award for his work performing on and producing Winter's "Step Back" release on Megaforce/Sony winning "Best Blues Album of the Year" highlighting his already long list of Grammy Nominations. As well as the BMA "Blues Music Award" for "Best Blues/Rock Album" reaching #16 on the Billboard Top 200 and staying at #1 on the Billboard Blues Charts for weeks. He is also a recipient of the Blues Foundation's KBA "Keeping The Blues Alive Award".</p>
            <br/>
            <p>His music has reached millions with appearances on Late Night with David Letterman and Jimmy Kimmel Live, and on award winning documentaries: "Down and Dirty" The Johnny Winter Story and "Sideman: Long Road to Glory" (feat: Bonnie Rait, Gregg Allman, Hubert Sumlin), as well as music written/performed and broadcast nationally on NBC and on multiple major album releases, books, instructional guitar columns, live Concert DVD's, and guest performances on countless recordings.</p>
            <br/>
            <p>Staying at #1 on the "Hot New Releases" charts for months, Nelson's latest project "Badass Generation" on Sony Records still maintains his unmistakable connection to the Blues, but it also finds the guitarist showing his many other musical dimentions fans have come expect considering him one of music's most respected and influential contemporary artists...</p>
            <br/>
            <p><span className="italic">"Love this album - the sound and the energy. Gorgeous, searing guitar work. Like a blow torch!"</span> - Wall Street Journal</p>
            <br/>
            <p><span className="italic">"The Paul Nelson Band Rocks. Period."</span> - Goldmine Magazine</p>      
          </div>
        </div>  
      </div>
    );
  }
}

export default Bio;
