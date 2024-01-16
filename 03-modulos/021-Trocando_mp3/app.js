const playButton = document.getElementById('playButton')

playButton.addEventListener('click', () => {
  const audio = new Audio('YNW Melly - Murder On My Mind.mp3')
  console.log(audio)
  audio.play()
})
