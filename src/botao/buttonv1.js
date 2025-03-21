export default function buttonv1(buttonData){
    // buttonData = {
    //  backgroundColor: '',
    //  color: '',
    //  border: '',
    //  borderRadius: '',
    //  clickColor: '',
    //  hover: '',
    //  shadow: '',
    // }
    // não é possível criar elemento diretamente no fragment
    const fragment = new DocumentFragment();
    
    const button = document.createElement('button');

    button.textContent = 'Clique-me'
    
    button.style.backgroundColor = buttonData.backgroundColor;
    button.style.color = buttonData.color;
    button.style.border = buttonData.border;
    button.style.borderRadius = buttonData.borderRadius;

    button.style.padding = '8px 16px'
    button.style.fontFamily = buttonData.fontFamily
    button.style.fontWeight = '600'
    button.style.fontSize = '2rem';
    button.style.cursor = 'pointer';
    if(buttonData.shadow !== null){
        button.style.boxShadow = buttonData.shadow;
        
    }

    
    button.addEventListener('mouseover', function(){
        button.style.backgroundColor = buttonData.hover
    });
    
    button.addEventListener('mouseout', function(){
        button.style.backgroundColor = buttonData.backgroundColor
    });

    button.addEventListener('click', (e) => {
        button.style.backgroundColor = buttonData.active;

        setTimeout(() => {
            button.style.backgroundColor = buttonData.backgroundColor
        }, 100);
    })

    fragment.appendChild(button);

    document.body.appendChild(fragment);


};