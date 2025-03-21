const elements = document.querySelectorAll('.slider-elements > .element');

let count = 0;
let isAnimating = false;

const nextBtn = document.querySelector('.btn.next');
const prevBtn = document.querySelector('.btn.prev');

initializeSlider();
export default function initializeSlider(){
    nextBtn.disabled = (count == elements.length - 1);
    nextBtn.addEventListener('click', passToNextElement);
    
    prevBtn.disabled = (count <= 0);
    // console.log(prevBtn.disabled); Início é true
    prevBtn.addEventListener('click', passToPrevElement);
}

function updateSliderBtns(){
    nextBtn.disabled = (count == elements.length - 1);
    prevBtn.disabled = (count <= 0);
}

function passToPrevElement(event){
    console.log(isAnimating);
    if(!isAnimating){
        isAnimating = true;
        elements[count].classList.toggle('leave-current-right');
        elements[count].classList.toggle('hidden');
    
        count--;
        elements[count].classList.toggle('enter-prev')
        elements[count].classList.toggle('hidden');
        setTimeout(() => {
            elements[count].classList.toggle('prev-element');
            elements[count].classList.toggle('enter-prev');
            elements[count + 1].classList.toggle('next-element');
            elements[count + 1].classList.toggle('leave-current-right');
            console.log(isAnimating);
            isAnimating = false;
            updateSliderBtns()
        }, 1500);
    }
}

function passToNextElement(event){
    if(!isAnimating){
        isAnimating = true;
        elements[count].classList.toggle('leave-current-left');
        elements[count].classList.toggle('hidden')
        
        count++;
        elements[count].classList.toggle('enter-next');
        elements[count].classList.toggle('hidden');
        setTimeout(() => {
            elements[count].classList.toggle('next-element');
            elements[count].classList.toggle('enter-next');
            elements[count - 1].classList.toggle('prev-element');
            elements[count - 1].classList.toggle('leave-current-left');
            updateSliderBtns();
            isAnimating = false;    
        }, 1500)
    }
    return;
}