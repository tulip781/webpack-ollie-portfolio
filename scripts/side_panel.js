/* Set the width of the sidebar to 250px (show it) */
 openNav = () => {
  document.getElementById("mySidepanel").style.borderLeft = "1px solid black";
  document.getElementById("mySidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
 closeNav = () => {
  document.getElementById("mySidepanel").style.width = "0";
  document.getElementById("mySidepanel").style.borderLeft = "0px solid black";
}

