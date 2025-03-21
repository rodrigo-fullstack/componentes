import ButtonSlider from "./ButtonSlider.js";

export default class Slider {
    constructor(elements, current) {
        this.elements = elements;
        this.current = current;
        this.inAnimation = false;
        this.btns = null;

        this.createButtonsForControl();
    }

    createButtonsForControl() {

        const nextBtn = new ButtonSlider(
            document.querySelector('.btn.next'), 'next'
        );

        const prevBtn = new ButtonSlider(
            document.querySelector('.btn.prev'), 'prev'
        );

        this.btns = {
            next: nextBtn,
            prev: prevBtn
        };
        nextBtn.addEventListener(this, 'next');
        prevBtn.addEventListener(this, 'prev');
    }

    updateButtonsForControl() {
        console.log('Executando update buttons...')
        
        // e se eu usasse sibling?
        
        this.btns.next.disable(this.current, this.elements.length);
        this.btns.prev.disable(this.current)
        
        console.log(this.btns.next.btn.disabled);
        console.log(this.btns.prev.btn.disabled);
    }

}