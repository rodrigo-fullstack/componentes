export default class Button{
    constructor(style, content){
        this.style = style
        this.element = this.createButton(content);
        c(this.element)
        this.showButton()
    }

    createButton(content){
        let button = document.createElement('button');
        button.textContent = content
        this.styleButton(button)
        return button;
    }

    showButton(){
        const fragment = new DocumentFragment();
        fragment.appendChild(this.element);
        document.body.append(fragment) // também insere no body
        console.log(document.body)
    }

    styleButton(button){
        for(const property in this.style){
            // c(!property in ['mouseover', 'click'])
            // c(!exists(property, ['mouseover', 'click']))
            if(!exists(property, ['mouseover', 'click'])){
                button.style[property] = this.style[property]
                continue;
            } 
            // c('vou adicioanr eve list')
            this.addEventListener(button, property, this.style[property]);
        }
    }

    addEventListener(button, event, value){
        let callback = null;
        switch(event){
            case 'click':
                callback = () => {
                    button.style.backgroundColor = value;

                    setTimeout(() => {
                        button.style.backgroundColor = this.style.backgroundColor
                    }, 100)
                }
                break;
            
            case 'mouseover':
                callback = () => {
                    button.style.backgroundColor = value;
                }
                break;

        }

        button.addEventListener(event, callback);
        if(event === 'mouseover'){
            button.addEventListener('mouseout', () => {
                button.style.backgroundColor = this.style.backgroundColor;
            });
        }
    }

}

function c(v){
    console.log(v)
}

function exists(searchElement, array){
    for(const element of array){
        c('Elemento do Array ' + element + ' é igual ao elemento procurado: ' + searchElement + '? ' + (element === searchElement));
        // c(searchElement);
        if(element === searchElement){
            return true;
        }
    };

    return false;
}