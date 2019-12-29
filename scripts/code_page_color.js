bgColour = () => {
 document.querySelector('.navbar').style.opacity = '100%';
 document.querySelector('.navbar').style.opacity = '-webkit-opacity: 1';
 if (document.getElementById("about-body")) document.getElementById('about-body').style.backgroundColor = localStorage.getItem("usercolour");
 if (document.getElementById("big-html")) document.getElementById('big-html').style.backgroundColor = localStorage.getItem("usercolour");
 document.querySelector('.navbar').style.backgroundColor = localStorage.getItem("usercolour");
}

bgColour();




