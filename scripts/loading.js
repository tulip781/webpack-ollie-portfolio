setTimeout(fade = () => {
  document.querySelector('.load').classList.add('hidden')
  setTimeout(show = () => {
    document.querySelector('.land').classList.add('reveal')
  }, 1000)
}, 2000)
