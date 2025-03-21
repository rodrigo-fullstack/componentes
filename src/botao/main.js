import buttonv1 from './buttonv1.js';
import Button from './buttonv2.js';

// buttonv1({
//     backgroundColor: '#000',
//     color: '#fff',
//     border: '4px solid #555',
//     borderRadius: '16px',
//     active: '#999',
//     hover: '#777', 
//     fontFamily: 'sans-serif'
// })

new Button({
    backgroundColor: '#000',
    padding: '8px 1rem ',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: '600',
    border: 'none',
    border: '5px solid #0f0',
    borderRadius: '10px',
    cursor: 'pointer',
    mouseover: '#779',
    click: '#999'

}, 'Clique-me');