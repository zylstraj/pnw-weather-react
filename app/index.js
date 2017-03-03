import React from "react";
import ReactDOM from "react-dom"
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      handleClick() {
        console.log("clicked");
      }
  render() {
    return(
      <div>
        <h1>PNW Weather</h1>
        <ul>
          <li onClick={this.handleClick} id="seattleWeather">Seattle</li>
          <li onClick={this.handleClick} id="portlandWeather">Portland</li>
          <li onClick={this.handleClick} id="vancouverWeather">Vancouver</li>
        </ul>
        <div>
          <p><br/>{this.state.Portland.description}</p>
          <p>Temperature: {this.state.Portland.temperature}</p>
        </div>
        <div>
          <p>Main Weather<br/>{this.state.Seattle.description}</p>
          <p>Temperature: {this.state.Seattle.temperature}</p>
        </div>
        <div>
          <p>Main Weather<br/>{this.state.Vancouver.description}</p>
          <p>Temperature: {this.state.Vancouver.temperature}</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
