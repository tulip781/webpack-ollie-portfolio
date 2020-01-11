myFunction = () => {
  const x = document.getElementById("myNavbar");
  if (x.className === "navbar reveal") {
    x.className += " responsive";
  } else {
    x.className = "navbar reveal";
  }
}

