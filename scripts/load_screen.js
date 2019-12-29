if (!sessionStorage.isVisited) {
  document.querySelector('.navbar').classList.add('hidden');
  document.querySelector('.load').style.opacity = '100%';
  document.querySelector('.load').style.opacity = '-webkit-opacity: 1';
  sessionStorage.setItem('isVisited', 'true');
  setTimeout(fade = () => {
    console.log('fade has been reached');
    document.querySelector('.load').style.opacity = '0%';
    document.querySelector('.load').style.opacity = '-webkit-opacity: 0';
    document.querySelector('.load').classList.add('hidden');
    setTimeout(show = () => {
      document.querySelector('.land').classList.add('reveal');
      document.querySelector('.navbar').classList.add('reveal');
    }, 1000)
  }, 2000)
} else {
    window.onload = () => {
    console.log('window reload reached')
    document.querySelector('.load').classList.add('hidden');
    document.querySelector('.land').classList.add('reveal');
    document.querySelector('.navbar').classList.add('reveal');
    document.querySelector('.load').style.display = 'none';
    document.querySelector('.land').style.transition = 'opacity 0s';
    document.querySelector('.land').style.opacity = '-webkit-opacity: 1';
    document.querySelector('.land').style.opacity = '100%';
    document.querySelector('.navbar').style.transition = 'opacity 0s';
    document.querySelector('.navbar').style.opacity = '100%';
    document.querySelector('.navbar').style.opacity = '-webkit-opacity: 1';
  }
}

