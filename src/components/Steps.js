import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const Step = styled.button`
    width: 40px;
    border: 1px solid grey;
    background-color: ${props => props.active ? '#00aeef' : '#ddd'};
    margin: 0px 5px;
    padding: 30px 0 5px;
    text-align: center;
    border-radius: 3px;
    color: ${props => props.active ? '#fff' : '#444'};
    transition: all .25s ease-in-out;

    
`

const Steps = ({currentStep, steps, onStepClick}) => {

  const renderSteps = () => {
    return steps.map(step => {
      const onClick = () => onStepClick(step.index)
      return <Step key={step.index} active={currentStep === step.index} onClick={onClick}>{step.index + 1}</Step>
    })
  }

  return (
    <Flex>
      {renderSteps()}
    </Flex>
  )
}

export default Steps