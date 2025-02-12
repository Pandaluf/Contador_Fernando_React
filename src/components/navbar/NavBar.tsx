import { useEffect, useRef } from "react";
import './NavBar.css';

function NavBar() {
    const menuRef = useRef<HTMLElement | null>(null); // Referencia al menú

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50 ) {
                menuRef.current?.classList.add('slidedown');
            } else {
                menuRef.current?.classList.remove('slidedown');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={menuRef} className="headerNav">
            <a href="#" className="headerNav__logo">Fernando</a>

            <input type="checkbox" id="check" />
            <label htmlFor="check" className="headerNav__icon">
                <i className="bx bx-menu" id="menu-icon"></i>
                <i className="bx bx-x" id="close-icon"></i>
            </label>

            <nav className="headerNav__nav">
                <a href="#" className="headerNav__nav__link" style={{ "--i": 0 } as React.CSSProperties}>Inicio</a>
                <a href="#" className="headerNav__nav__link" style={{ "--i": 1 } as React.CSSProperties}>Servicios</a>
                <a href="#" className="headerNav__nav__link" style={{ "--i": 2 } as React.CSSProperties}>Nosotros</a>
            </nav>
        </section>
    );
}

export default NavBar;
