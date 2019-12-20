console.log('hello from code fix')
bgColour = () => {
 document.querySelector('.navbar').style.opacity = '100%';
 document.getElementById('about-body').style.backgroundColor = localStorage.getItem("usercolour");
 document.getElementById('big-html').style.backgroundColor = localStorage.getItem("usercolour");
 document.querySelector('.navbar').style.backgroundColor = localStorage.getItem("usercolour");
}

bgColour();




