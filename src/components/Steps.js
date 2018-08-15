import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const Step = styled.button`
    width: 40px;
    border: 1px solid grey;
    background-color: ${props => {
      const {button, activeStep, selectedDrum } = props.theme.color
  
      if (props.active) {
        return activeStep
      } else if (props.stepDrum) {
        return selectedDrum
      } else {
        return button
      }
    }};
    color:  ${props => {
      const { black, white } = props.theme.color
  
      if (props.active || props.stepDrum) {
        return white
      } else {
        return black
      }
}};
    margin: 0px 5px;
    padding: 30px 0 5px;
    text-align: center;
    border-radius: 3px;
    transition: all .25s ease-in-out;

    
`

const Steps = ({ currentStep, steps, onStepClick, currentDrum }) => {

  const renderSteps = () => {
    return steps.map(step => {
      const onClick = () => onStepClick(step.index)
      const stepDrum = step.drums.indexOf(currentDrum) > -1
      return <Step
        key={step.index}
        active={currentStep === step.index}
        onClick={onClick}
        stepDrum={stepDrum}
      >{step.index + 1}</Step>
    })
  }

  return (
    <Flex>
      {renderSteps()}
    </Flex>
  )
}

export default Steps