const elements = document.querySelectorAll('.slider-elements > .element');

let count = 0;
console.log(elements)

const nextBtn = document.querySelector('.btn.next');
const prevBtn = document.querySelector('.btn.prev');

slider();
function slider(){
    nextBtn.disabled = (count == elements.length - 1);
    nextBtn.addEventListener('click', () => {

        // elements[count].style.display = 'none';
        // elements[count].style.display = 'flex';
        // 1. atribuir classes de sair ao atual
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
        }, 2000)
        console.log(count);
        updateSliderBtns();
    });
    
    prevBtn.disabled = (count <= 0);
    // console.log(prevBtn.disabled); Início é true
    prevBtn.addEventListener('click', () => {
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
        }, 2000);
        updateSliderBtns()
    });
}

function updateSliderBtns(){
    nextBtn.disabled = (count == elements.length - 1);
    prevBtn.disabled = (count <= 0);
}