import React  from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const PadWrapper = styled.div`
  border: 1px solid grey;
  border-radius: 5px;
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const PadButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: papayawhip;
  border: 1px solid papayawhip;
  border-radius: 3px;
  
  &.active {
   background-color: rebeccapurple;
  }

`

const DrumPads = ({ drums }) => {

  return <Flex>
    {drums.map((drum, i) => (
      <PadWrapper>
        <h3>{drum.label}</h3>
        <PadButton/>
      </PadWrapper>
    ))}
  </Flex>
}

export default DrumPads