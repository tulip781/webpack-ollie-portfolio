if (!sessionStorage.isVisited) {
  document.querySelector('.load').style.opacity = '100%';
  sessionStorage.setItem('isVisited', 'true');
  setTimeout(fade = () => {
    document.querySelector('.load').style.opacity = '0%';
    setTimeout(show = () => {
      document.querySelector('.land').classList.add('reveal');
      document.querySelector('.navbar').classList.add('reveal');
    }, 1000)
  }, 2000)
} else {
    window.onload = () => {
    document.querySelector('.load').style.display = 'none';
    document.querySelector('.land').style.transition = 'opacity 0s';
    document.querySelector('.land').style.opacity = '100%';
    document.querySelector('.navbar').style.transition = 'opacity 0s';
    document.querySelector('.navbar').style.opacity = '100%';
  }
}

