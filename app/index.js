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
  },
  componentDidMount: function() {
    var _this = this;
    this.serverRequest =
      axios
        .get("http://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&APPID=0547f7cf3264ad65fb0b9df34fdf9cb1")
        .then(function(result) {
          console.log(result);
          // _this.setState({
          //   jobs: result.data.jobs
          // });
        })
  },
  render() {
    return(
      <div>
        <h1>PNW Weather</h1>
        <ul>
          <li id="seattleWeather">Seattle</li>
          <li id="portlandWeather">Portland</li>
          <li id="vancouverWeather">Vancouver</li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
