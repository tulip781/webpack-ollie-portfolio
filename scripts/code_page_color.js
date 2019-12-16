bgColour = () => {
 document.getElementById("about-body").style.backgroundColor = localStorage.getItem("usercolour");
 document.querySelector('.navbar').style.backgroundColor = localStorage.getItem("usercolour");
 document.getElementById("mySidepanel").style.backgroundColor = localStorage.getItem("usercolour");
}

bgColour();



