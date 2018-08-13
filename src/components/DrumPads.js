import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'

const PadWrapper = styled.div`
  border: 1px solid #444;
  border-radius: 5px;
  margin: 10px;
  width: 100px;
  
  //padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`

const PadLabel = styled.p`
background-color: #444;
text-align: center;
color: #F06100;
margin: 0;
width: 100%;

`

const PadButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: ${props => props.current ? '#09BB28' : '#82B8DB'};
  border: 1px solid ${props => props.current ? '#09BB28' : '#82B8DB'};
  border-radius: 3px;
  margin: 15px auto;
`


const DrumPads = ({ drums, onPadClick, currentDrum }) => {

  return <Flex>
    {drums.map((drum, i) => {
        const onClick = () => onPadClick(i)

        return (
          <PadWrapper key={drum.label}>
            <PadLabel>{drum.label}</PadLabel>
            <PadButton onClick={onClick} current={currentDrum === i}/>
          </PadWrapper>
        )
      }
    )}
  </Flex>
}

export default DrumPads