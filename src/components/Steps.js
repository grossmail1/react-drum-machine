import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const Step = styled.div`
    width: 40px;
    border: 1px solid grey;
    background-color: #eee;
    margin: 0px 5px;
    padding: 30px 0 5px;
    text-align: center;
`

const Steps = () => {

  const renderSteps = () => {
    return new Array(16).fill(undefined).map((d, i) =>{
      console.log('step', i)
      return <Step key={i}>{i + 1}</Step>
    })
  }

  return (
    <Flex>
      {renderSteps()}
    </Flex>
  )
}

export default Steps