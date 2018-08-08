import React, { Component } from 'react';
import Steps from "components/Steps"
import BPM from "components/BPM"

const millisPerMinute = 1000 * 60

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 0,
      playing: false,
      bpm: 80,
    }
  }

  onBPMChange = (event) => {
    this.setState({bpm: event.target.value})
  }

  onPlay = () => {
    this.setState({playing: true})

      // clear the old stepper and start a new one
    clearInterval(this.interval)
    this.interval = null

    this.interval = setInterval(() => {
      let currentStep = this.state.currentStep
      if(currentStep < 15) {
        currentStep++
      } else {
        currentStep = 0
      }
      this.setState({currentStep})

    }, (millisPerMinute / this.state.bpm))
  }

  onPause = () => {
    clearInterval(this.interval)
    this.interval = null

    this.setState({playing: false, currentStep: 0})
  }

  render() {
    const { bpm, currentStep, playing } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Drum Machine</h1>
        </header>
        <BPM bpm={bpm} onBPMChange={this.onBPMChange}/>
        <button onClick={playing ? this.onPause : this.onPlay} >
          {playing ? 'pause' : 'play'}
        </button>
        <Steps currentStep={currentStep} />
      </div>
    );
  }
}

export default App;
