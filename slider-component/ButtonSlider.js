export default class ButtonSlider {
    constructor(
        btn = document.querySelector('.btn.next'),
        name = 'next'
    ) {
        this.btn = btn;
        this.name = name;
    }

    addEventListener(slider) {
        if (this.name === 'next') {
            this.nextButtonEventListener(slider);
            return;
        }
        if (this.name === 'prev') {
            this.prevButtonEventListener(slider);
            return
        }

        throw new Error('Button invalid!');

    }

    nextButtonEventListener(slider) {

        this.btn.disabled = slider.current == slider.elements.length - 1;
        this.btn.addEventListener('click', () => {
            this.passToNextElement(slider);
        })

    }

    passToNextElement(slider){
        if (!slider.inAnimation) {
            slider.inAnimation = true;
            slider.elements[slider.current].classList.toggle('leave-current-left');
            slider.elements[slider.current].classList.toggle('hidden');

            slider.current++;
            slider.elements[slider.current].classList.toggle('enter-next');
            slider.elements[slider.current].classList.toggle('hidden');
            setTimeout(() => {
                slider.elements[slider.current].classList.toggle('next-element')
                slider.elements[slider.current].classList.toggle('enter-next');
                slider.elements[slider.current - 1].classList.toggle('leave-current-left');
                slider.elements[slider.current - 1].classList.toggle('prev-element');

                slider.inAnimation = false;
                slider.updateButtonsForControl();
            }, 1500);
        }
    }

    prevButtonEventListener(slider) {
        this.btn.disabled = slider.current === 0;
        this.btn.addEventListener('click', () => {
            this.passToPrevElement(slider)
        })
    }

    passToPrevElement(slider){
        if (!slider.inAnimation) {
            slider.inAnimation = true;
            slider.elements[slider.current].classList.toggle('leave-current-right');
            slider.elements[slider.current].classList.toggle('hidden');

            slider.current--;
            slider.elements[slider.current].classList.toggle('enter-prev');
            slider.elements[slider.current].classList.toggle('hidden');
            setTimeout(() => {
                slider.elements[slider.current].classList.toggle('prev-element')
                slider.elements[slider.current].classList.toggle('enter-prev');
                slider.elements[slider.current + 1].classList.toggle('leave-current-right');
                slider.elements[slider.current + 1].classList.toggle('next-element');

                slider.inAnimation = false;
                slider.updateButtonsForControl();
            }, 1500);
        }
    }

    disable(current, length = null){
        if(this.name === 'prev'){
            this.btn.disabled = current === 0;
            return;

        }

        if(this.name === 'next'){
            this.btn.disabled = current ===  length - 1
            return;
        }


        throw new Error('Button invalid!')
    }

}