const action = () => {
  imageToLoad.classList.add('loader');
}

const imageToLoad = document.querySelector(".show-image");
imageToLoad.addEventListener("load", action());
console.log('the new funciton is working');

