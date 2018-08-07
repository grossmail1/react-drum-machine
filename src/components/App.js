import React, { Component } from 'react';
import Steps from "components/Steps"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drum Machine</h1>
        </header>
        <Steps />
      </div>
    );
  }
}

export default App;
