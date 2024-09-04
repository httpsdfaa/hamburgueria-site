import React, { useState } from "react";

import Logo from "../assets/logo.png"
import MenuList from "../assets/icons/MenuList";
import CloseIcon from "../assets/icons/CloseIcon";

import '../styles/Header.css'


function Header() {

    const [toggle, setToggle] = useState(true ? window.innerWidth > 600 : false);

    // width maior 600 redenrizar navbar
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 600) {
            setToggle(false);
        } else {
            setToggle(true)
        }
    })

    // Evento ao clicar no botão menu e disparar o navbar
    const onclick = () => {
        if (!toggle) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }

    return (
        <header className="header flex justify-between items-center bg-marromAvermelhado h-20 w-full px-28">
            <img className="img-logo rounded-full w-28 h-28 relative top-1/2 z-10" src={Logo} alt="logo"></img>
            {// Caso navbar esteja não redenrizado mostrar icon menu
                !toggle ?
                    < section className="menu-list" onClick={onclick}>
                        <MenuList />
                    </section>
                    :
                    <section className="close-icon" onClick={onclick}>
                        <CloseIcon />
                    </section>
            }
            {
                toggle ?
                    <nav className="navbar font-yaLike" style={{ display: !toggle ? 'none !important' : 'flex !important' }}>
                        <a href="/" className="mr-5 text-titleNavManteiga">HOME</a>
                        <a href="/" className="ml-5 text-titleNavManteiga">CONTATO</a>
                    </nav> : null
            }
        </header >
    )
}

export default Header;