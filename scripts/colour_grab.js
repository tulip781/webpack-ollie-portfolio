bgColour = () => {
 document.getElementById("about-body").style.backgroundColor = localStorage.getItem("usercolour");
 document.querySelector('.navbar').style.backgroundColor = localStorage.getItem("usercolour");
 document.getElementById("mySidepanel").style.backgroundColor = localStorage.getItem("usercolour");
}

bgColour();

localStorage.setItem('loadedbefore', 'yes');

console.log(localStorage.getItem("loadedbefore"))
