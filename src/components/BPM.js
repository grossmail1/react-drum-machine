import React from 'react'

const BPM = ({bpm, onBPMChange}) => {
  return (
    <div>
      <label>BPM:</label>
      <input type="text" value={bpm} onChange={onBPMChange}/>
    </div>
  )
}

export default BPM