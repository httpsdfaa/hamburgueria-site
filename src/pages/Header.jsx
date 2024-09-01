import React from "react";

import Logo from "../assets/logo.png"
import '../styles/Header.css'

function Header() {
    return (
        <header className="header flex justify-between items-center bg-marromAvermelhado h-20 w-full px-28">
            <img className="img-logo rounded-full w-28 h-28 relative top-1/2 z-10" src={Logo} alt="logo"></img>
            <nav className="navbar font-yaLike">
                <a href="/" className="mr-5 text-titleNavManteiga">HOME</a>
                <a href="/" className="ml-5 text-titleNavManteiga">CONTATO</a>
            </nav>
        </header>
    )
}

export default Header;