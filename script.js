let open = document.getElementById('openbar');
let close = document.getElementById('closebar');
let menu = document.getElementById('menu');

if (open) {
    open.addEventListener('click',() =>{
        menu.classList.add('active');
    })  
}
if (close) {
    close.addEventListener('click',() =>{
        menu.classList.remove('active');
    })  
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  let counter = 0;

  function nextSlide() {
    if (counter < slider.children.length - 1) {
      counter++;
    } else {
      counter = 0;
    }
    updateSlider();
  }

  function updateSlider() {
    slider.style.transform = `translateX(${-counter * 100}%)`;
  }

  // Automatic sliding every 2 seconds
  setInterval(nextSlide, 2000);
});