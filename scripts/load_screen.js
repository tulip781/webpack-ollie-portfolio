getNewRandomColor = () => {
  const myArray = ['#ebe2da', '#dddddd', '#dbc8bc', '#958e7d', '#D3D3D3', "#ECE5BD"];
  let rand = myArray[Math.floor(Math.random() * myArray.length)];
  document.getElementById("body").style.backgroundColor = rand;
  document.querySelector('.navbar').style.backgroundColor = rand;
  let colour = document.getElementById("body").style.backgroundColor;
  localStorage.setItem("usercolour",colour);
}
if (!sessionStorage.isVisited) {
  getNewRandomColor();
  document.querySelector('.navbar').classList.add('hidden');
  document.getElementById('myNavbar').style.opacity = '0%';
  document.getElementById('myNavbar').style.opacity = '-webkit-opacity: 0';
  document.querySelector('.navbar').style.opacity = '0%';
  document.querySelector('.navbar').style.opacity = '-webkit-opacity: 0';
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
    document.querySelector('.navbar').classList.remove('hidden');
    if (document.getElementById("about-body")) document.getElementById("about-body").style.backgroundColor = localStorage.getItem("usercolour");
    document.getElementById("body").style.backgroundColor = localStorage.getItem("usercolour");
    document.querySelector('.navbar').style.backgroundColor = localStorage.getItem("usercolour");
  }
}


const shuffle = document.querySelector('.shuffle');

shuffle.addEventListener('click', (event) => {
  getNewRandomColor()
});
