// Module is responsible for device list slider

const sliderView = document.querySelector('.carousel_holder');
const slides = document.querySelectorAll('.slide')

// Buttons

const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");

// Counter of current position

let counter = 0;
console.log(counter)

const maxCounter = () => {
    const holderWidth = sliderView.clientWidth;
    const slideWidth = slides[0].clientWidth;
    const slidesToView = Math.ceil(holderWidth/slideWidth);
    const maxCounter = slides.length - slidesToView;
    return maxCounter;
}

// listen to the size of screen and adjust slide width. Prevents original position place
const size = () => {
    return slides[0].clientWidth + 10
}

window.addEventListener('resize', () => {
    // let size = slides[0].clientWidth;
    sliderView.style.transform ='translateX(' + (-size() * counter+10)+'px)'
})

// Button listeners

nextButton.addEventListener('click', ()=> {
    if (counter >= maxCounter()) return;
    sliderView.style.transition = "transform 0.4s ease-in-out";
    counter++; 
    console.log(counter)
    sliderView.style.transform = 'translateX(' + (-size() * counter ) + 'px)';
  });

prevButton.addEventListener('click', ()=> {
    if (counter <= 0) return;
    sliderView.style.transition = "transform 0.4s ease-in-out";
    counter--;
    console.log(counter)
    sliderView.style.transform = 'translateX(' + (-size() * counter ) + 'px)';
  });
