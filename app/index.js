import React from "react";
import ReactDOM from "react-dom"

const API_KEY;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Seattle: [],
      Portland: [],
      Vancouver: []
    }
  }
  render() {
    return(
      <div>
      Hello
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
