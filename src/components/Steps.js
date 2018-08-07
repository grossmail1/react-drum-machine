import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const Step = styled.div`
    width: 40px;
    border: 1px solid grey;
    background-color: ${props => props.active ? '#00aeef' : '#ddd'};
    margin: 0px 5px;
    padding: 30px 0 5px;
    text-align: center;
    border-radius: 3px;
    color: ${props => props.active ? '#fff' : '#444'};

    
`

const Steps = ({currentStep}) => {

  const renderSteps = () => {
    return Array.apply(null, Array(16)).map((d, i) => {
      return <Step key={i} active={currentStep === i}>{i + 1}</Step>
    })
  }

  return (
    <Flex>
      {renderSteps()}
    </Flex>
  )
}

export default Steps