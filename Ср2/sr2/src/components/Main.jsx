import '../App.css';
import '../index.css';
import './css/Main.css';

export function Menu() {
    return (
        <>
            <nav className="menu">
                <ul className="menu-list">
                    <li><a href="#header">Вгору</a></li>
                    <li><a href="#section1">Основна частина</a></li>
                    <li><a href="#section2">Новинки</a></li>
                    <li><a href="#section3">Контакти</a></li>
                    <li><a href="#footer">Вниз</a></li>
                </ul>
            </nav>
        </>
    );
}

export function Header() {
    return(
        <>
            <header id='header' className='header'>
                <h1 className='header-h1'>Apple Company</h1>
            </header>
        </>
    );
}

export function Footer() {
    return(
        <>
            <footer id='footer' className='footer'>
                <h3 className='footer-h3'>© Apple</h3>
            </footer>
        </>
    );
}