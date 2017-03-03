import React from "react";
import ReactDOM from "react-dom"
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSeattle = this.handleSeattle.bind(this);
    this.handlePortland = this.handlePortland.bind(this);
    this.handleVancouver = this.handleVancouver.bind(this);
    this.state = {
      shownTemp: [],
      shownDescription: [],
      Seattle: [],
      Portland: [],
      Vancouver: []
    }
  }
  componentDidMount() {
    const portlandUrl = "http://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1";
    const seattleUrl = "http://api.openweathermap.org/data/2.5/weather?id=5809844&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1";
    const vancouverUrl = "http://api.openweathermap.org/data/2.5/weather?id=6173331&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1";
      axios.get(portlandUrl)
      .then(response => {
        console.log(this);
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        this.setState({
          Portland: {
            "description": response.data.weather[0].description,
            "temperature": response.data.main.temp
          }
        })
      });
      axios.get(vancouverUrl)
      .then(response => {
        console.log(this);
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        this.setState({
          Vancouver: {
            "description": response.data.weather[0].description,
            "temperature": response.data.main.temp
          }
        })
      });
      axios.get(seattleUrl)
      .then(response => {
        console.log(this);
        console.log(response.data); // ex.: { user: 'Your User'}
        console.log(response.status); // ex.: 200
        this.setState({
          Seattle: {
            "description": response.data.weather[0].description,
            "temperature": response.data.main.temp
          }
        })
      });
      }
      handleSeattle() {
        console.log("clicked");
        this.setState({
          shownTemp: {
            "temperature": this.state.Seattle.temperature
          },
          shownDescription: {
            "description": this.state.Seattle.description
          }
        });

      }
      handlePortland() {
        console.log("clicked");
        this.setState({
          shownTemp: {
            "temperature": this.state.Portland.temperature
          },
          shownDescription: {
            "description": this.state.Portland.description
          }
        });

      }
      handleVancouver() {
        console.log("clicked");
        this.setState({
          shownTemp: {
            "temperature": this.state.Vancouver.temperature
          },
          shownDescription: {
            "description": this.state.Vancouver.description
          }
        });

      }
  render() {
    return(
      <div>
        <h1>PNW Weather</h1>
        <ul>
          <li onClick={this.handleSeattle} id="seattleWeather">Seattle</li>
          <li onClick={this.handlePortland} id="portlandWeather">Portland</li>
          <li onClick={this.handleVancouver} id="vancouverWeather">Vancouver</li>
        </ul>
        <div>
          <p>Description: <br/>{this.state.shownDescription.description}</p>
          <p>Temperature: {this.state.shownTemp.temperature}</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
