import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const PadWrapper = styled.div`
  border: 1px solid #333;
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
  background-color: ${props => props.current ? '#0077aa' : 'papayawhip'};
  border: 1px solid ${props => props.current ? '#0077aa' : 'papayawhip'};
  border-radius: 3px;
  

`

const DrumPads = ({ drums, onPadClick, currentDrum }) => {

  return <Flex>
    {drums.map((drum, i) => {
        const onClick = () => onPadClick(i)

        return (
          <PadWrapper key={drum.label}>
            <h3>{drum.label}</h3>
            <PadButton onClick={onClick} current={currentDrum === i}/>
          </PadWrapper>
        )
      }
    )}
  </Flex>
}

export default DrumPads