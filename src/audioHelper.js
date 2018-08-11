export const renderAudioForDrums = (drums) => {
  const wrapper = document.getElementById('audio-wrapper')

  return drums.map((drum, i) => {
    const audio = document.createElement('audio')
    audio.setAttribute('src',drum.src)
    audio.setAttribute('id', `drum-${i}`)

    wrapper.appendChild(audio)
    return audio
  })
}