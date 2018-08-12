import React, { Component } from 'react';
import styled from 'styled-components'

import Steps from "components/Steps"
import BPM from "components/BPM"
import drums from '../drums'
import DrumPads from "components/DrumPads"
import { renderAudioForDrums } from '../audioHelper'
import findIndex from "lodash-es/findIndex"

const AppWrapper = styled.div`
width: 100%;
height: 100%;
background-color: #444;
`

const millisPerMinute = 1000 * 60

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentStep: 0,
      playing: false,
      bpm: 80,
      subdivisions: 4,
      currentDrum: -1,
      steps: Array.apply(null, Array(16)).map((d, i) => ({
        index: i,
        drums: []
      })
    )}


    this.drums = []
  }

  componentDidMount() {
    this.drums = renderAudioForDrums(drums)
  }

  onBPMChange = (event) => {
    this.setState({ bpm: event.target.value })
  }

  onPlay = () => {
    this.setState({ playing: true })

    // clear the old stepper and start a new one
    clearInterval(this.interval)
    this.interval = null

    this.interval = setInterval(() => {
      let currentStep = this.state.currentStep
      if (currentStep < 15) {
        currentStep++
      } else {
        currentStep = 0
      }
      this.setState({ currentStep })

    }, (millisPerMinute / this.state.bpm) / this.state.subdivisions)
  }

  onPause = () => {
    clearInterval(this.interval)
    this.interval = null

    this.setState({ playing: false, currentStep: 0 })
  }

  onPadClick = (i) => {
    this.setState({currentDrum: i})
    let drum = this.drums[i]
    drum.currentTime = 0
    drum.play()
  }

  onStepClick = (i) => {
    console.log('i', i)
    const newSteps = [...this.state.steps]
    const index = findIndex(newSteps[this.state.currentDrum].drums, i)
    console.log('index', index)
    if (index > 0) {
      newSteps[this.state.currentDrum].drums.splice(index, 1)
    } else {
      newSteps[this.state.currentDrum].drums.push(i)
    }

    this.setState({
      steps: newSteps
    })
  }

  render() {
    const { bpm, currentStep, playing, steps, currentDrum } = this.state
    return (
      <AppWrapper>
        <header>
          <h1>Drum Machine</h1>
        </header>
        <BPM bpm={bpm} onBPMChange={this.onBPMChange}/>
        <button onClick={playing ? this.onPause : this.onPlay}>
          {playing ? 'pause' : 'play'}
        </button>
        <Steps currentStep={currentStep} steps={steps} onStepClick={this.onStepClick}/>
        <DrumPads drums={drums} onPadClick={this.onPadClick} currentDrum={currentDrum}/>
        <div id="audio-wrapper"/>
      </AppWrapper>
    );
  }
}

export default App;
