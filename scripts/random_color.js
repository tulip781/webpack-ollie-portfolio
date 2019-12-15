getNewRandomColor = () => {
  const myArray = ['#ebe2da', '#dddddd', '#dbc8bc', '#958e7d', '#96af76', '#cf9c82', '#D3D3D3'];
  let rand = myArray[Math.floor(Math.random() * myArray.length)];
  console.log(rand)
  document.getElementById("body").style.backgroundColor = rand;
  document.getElementById("wrapper").style.backgroundColor = rand;
  document.querySelector('.navbar').style.backgroundColor = rand;
  document.getElementById("body").style.backgroundColor = rand;
  document.querySelector(".sidepanel").style.backgroundColor = rand;
}

window.onload = function() {
   let colour = document.getElementById("body").style.backgroundColor;
   localStorage.setItem("usercolour",colour);
}



getNewRandomColor();


