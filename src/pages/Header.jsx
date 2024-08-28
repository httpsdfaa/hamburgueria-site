import React from "react";

import "../styles/Header.css"

function Header() {
    return (
        <header className="header flex justify-between">
            <img src="/" alt="logo"></img>
            <nav className="navbar font-yaLike">
                <a href="/">HOME</a>
                <a href="/">CONTATO</a>
            </nav>
        </header>
    )
}

export default Header;