import React from "react";

import "../styles/Header.css"
import Logo from "../assets/logo.png"

function Header() {
    return (
        <header className="header flex justify-between items-center bg-marromAvermelhado h-20 w-full px-28">
            <img className="rounded-full w-28 h-28 relative top-1/2 z-10" src={Logo} alt="logo"></img>
            <nav className="navbar font-yaLike text-titleNavManteiga">
                <a href="/" className="mr-5">HOME</a>
                <a href="/" className="ml-5">CONTATO</a>
            </nav>
        </header>
    )
}

export default Header;