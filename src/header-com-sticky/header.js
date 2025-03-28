const header = document.createElement('header');
header.classList.toggle('nav-header');

// definindo componente no js
header.innerHTML = `
        <nav class="nav-bar">
            <div class="logo-container">
                <img src="./logo.svg" alt="Imagem inexistente" width="100" class="logo">
                <h1 class="logo-title">rodrigo-fullstack</h1>
            </div>

            <ul class="nav-list">
                <a href="" class="nav-link">
                    <li class="nav-item">Home</li>
                </a>
                <a href="" class="nav-link">
                    <li class="nav-item">Sobre</li>
                </a>
                <a href="" class="nav-link">
                    <li class="nav-item">Contatos</li>
                </a>
                <a href="" class="nav-link">
                    <li class="nav-item">Preços</li>
                </a>
            </ul>
        </nav>
`

const styles = document.createElement('style');
// definindo classes no javascript
styles.innerHTML = `
    .nav-header{
        position: sticky;
        top: 0;
        margin-top: 2rem;
        background-color: #9a01f8;
        padding: 1rem;
        font-family: Arial;
    }

    .nav-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;

    }

    .nav-list{
        list-style: none;
        display: flex;
        gap: 1rem;
        justify-content: start;
    }

    .nav-link{
        text-decoration: none;
        color: #fff;

    }

    .logo{
        width: 64px;
    }

    .logo-container{
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;

const fragment = new DocumentFragment();
const stylesFragment = new DocumentFragment();
fragment.prepend(header);
stylesFragment.appendChild(styles);

document.head.append(stylesFragment);
document.body.prepend(fragment);