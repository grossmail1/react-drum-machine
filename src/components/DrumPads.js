import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import TouchKnob from "react-touch-knob"

const PadWrapper = styled.div`
  border: 1px solid ${props => props.theme.color.drumSection};
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
background-color: ${props => props.theme.color.drumSection};
text-align: center;
color: ${props => props.theme.color.black};
margin: 0;
width: 100%;

`

const PadButton = styled.button`
  width: 50px;
  height: 30px;
  background-color: ${props => props.current ? props.theme.color.selectedDrum : props.theme.color.button};
  border: 1px solid ${props => props.current ? props.theme.color.selectedDrum : props.theme.color.button};
  border-radius: 3px;
  margin: 15px auto;
`

const Knob = ({className, ...props}) => (
  <TouchKnob
    class={className}
    name="score"
    min="0"
    max="100"
    value="44"
    onChange={(c) => console.log('on change', c)}
    onEnd={(e) => console.log('on end', e)}
    showNumber={true}
  />
)

const StyledKnob = styled(Knob)`
     width: 50px; /* the canvas's width and height will be based only on the width of the element */
    height: 50px;
    margin: 10px;
    font-size: 2vw; /* font-size of the text output */
    line-height: 60%; /* width of the knob's "lane" */
    border-bottom-color: #ccc; /* background color of "lane" */
    border-top-color: "blue"; /* color of knob's value indicator */`


const DrumPads = ({ drums, onPadClick, currentDrum }) => {

  return <Flex>
    {drums.map((drum, i) => {
        const onClick = () => onPadClick(i)

        return (
          <PadWrapper key={drum.label}>
            <PadLabel>{drum.label}</PadLabel>
            <StyledKnob
                   name="score"
                   min="0"
                   max="100"
                   value="44"
                   onChange={(c) => console.log('on change', c)}
                   onEnd={(e) => console.log('on end', e)}
                   showNumber={true}
            />
            <PadButton onClick={onClick} current={currentDrum === i}/>
          </PadWrapper>
        )
      }
    )}
  </Flex>
}

export default DrumPads