import '../assets/NavStyle.css'
import { Link } from 'react-router-dom';
const Nav =() =>{
    const toggleMenu = () => {
        const burgerMenu = document.querySelector(".menu-icon");
        const src = burgerMenu.getAttribute('src');
        const iconName = src === '/src/assets/menu/burger-menu.svg' ?
            '/src/assets/menu/close.svg'
            :
            '/src/assets/menu/burger-menu.svg';
    
    
        burgerMenu.setAttribute(
            'src',
            iconName
        );
    
        const navigation = document.querySelector('.navigation');
    
        navigation.classList.toggle(
            'navigation--mobile'
        );
    };
    
    
    return (
        <>
<div className="menu__wrapper">
            <div className="menu__bar">
               
                    <img
                        className="logo"
                        src="/src/assets/menu/Gemini_Generated_Image_5f8tjq5f8tjq5f8t.png"
                        title='Logo'
                        alt='Logo'
                    />
                
                <img
                    className="menu-icon"
                    src="/src/assets/menu/burger-menu.svg"
                    title='Burger Menu'
                    alt='Burger Menu'
                    onClick={toggleMenu}
                />
                <ul className="navigation">
                    <li> <Link to='/'>Product</Link></li>
                    <li><Link to='/subscribe'>Subscribe</Link></li>
                    <li>
                        <Link to='/cart'>Cart <img src="/src/assets/menu/shopping-cart.png" alt="" /> </Link></li>
                    <li><a href="https://github.com/ASaintG/personal_shoppe">Source
                        <img src="/src/assets/menu/github-mark.png" alt="" />
                        </a></li>
                </ul>
            </div>
        </div>
        </>

    )
}
export default Nav;