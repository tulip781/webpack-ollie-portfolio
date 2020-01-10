const action = () => {
  imageToLoad.classList.add('loader');
  textBeneath.classList.add('loader');
}

const imageToLoad = document.querySelector(".show-image");
const textBeneath = document.querySelector(".project-image-description");
imageToLoad.addEventListener("load", action());
console.log('the new funciton is working');

