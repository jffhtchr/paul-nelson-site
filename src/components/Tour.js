import React, { Component } from 'react';
import '../styles/Tour.css';

class Tour extends Component {
  constructor(props){
    super(props);
    this.state = {
      events:[]
    }
    this.handleDateTime = this.handleDateTime.bind(this);
  } 

  componentDidMount(){
    fetch("https://rest.bandsintown.com/artists/paul%20nelson/events?app_id=0411fb3ef5ddf36a684818a59452392d")
    .then((response)=>{
      return response.json();
    })
    .then((data)=>{
      data.forEach(event=>{
        this.setState( (prevState)=>{
          return prevState.events.push(event)
        })
      })
    })
  }

  handleDateTime(date){
    const year = date.slice(0,4);
    const month = date.slice(5,7);
    const day = date.slice(8,10);
    const monthChecker = {
      "01":"Jan",
      "02":"Feb",
      "03":"Mar",
      "04":"Apr",
      "05":"May",
      "06":"Jun",
      "07":"Jul",
      "08":"Aug",
      "09":"Sep",
      "10":"Oct",
      "11":"Nov",
      "12":"Dec"
    }
    return  monthChecker[month] + " " + day + ", " + year
  }

  render() {
    return (
      <div id="tour-wrapper">
      <div id="tour-container">          
        <div id="tour-body">
          <h2 id="tour-header">Tour Dates 2018</h2>
          <div id="tour-contents">
            {this.state.events.length > 0 && (this.state.events.map(event=>{
                      return(
                        <div className="tour-event-container">
                          <div className="tour-event" key={event.id}>
                            <div className="event-data" id="event-date">{this.handleDateTime(event.datetime)}</div>
                            <div className="event-data" id="event-venue">{event.venue.name}</div> 
                            <div className="event-data" id="event-city">{event.venue.city}, {event.venue.region}</div>
                          </div> 
                          <div className="tour-event-buttons">
                            <div className="more-info">MORE INFO</div>
                            <div className="rsvp">RSVP</div>
                          </div>
                        </div>
                      )
                  })
            )}
            </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Tour;
