// getNewRandomColor = () => {
//   const myArray = ['#ebe2da', '#dddddd', '#dbc8bc', '#958e7d', '#D3D3D3', "#ECE5BD"];
//   let rand = myArray[Math.floor(Math.random() * myArray.length)];
//   document.getElementById("body").style.backgroundColor = rand;
//   document.querySelector('.navbar').style.backgroundColor = rand;
//   let colour = document.getElementById("body").style.backgroundColor;
//   localStorage.setItem("usercolour",colour);
// }

// if (!sessionStorage.isVisited) {
//   getNewRandomColor();
// } else {
//     if (document.getElementById("about-body")) document.getElementById("about-body").style.backgroundColor = localStorage.getItem("usercolour");
//     document.getElementById("body").style.backgroundColor = localStorage.getItem("usercolour");
//     document.querySelector('.navbar').style.backgroundColor = localStorage.getItem("usercolour");
// }

// const shuffle = document.querySelector('.shuffle');

// shuffle.addEventListener('click', (event) => {
//   getNewRandomColor()
// });
