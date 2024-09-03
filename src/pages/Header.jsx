import React, { useState } from "react";

import Logo from "../assets/logo.png"
import MenuList from "../assets/icons/MenuList";
import '../styles/Header.css'


function Header() {

    const [toggle, setToggle] = useState(true ? window.innerWidth <= 600 : false);

    // const onclick = () => {
    //     toggle ? setToggle(true) : setToggle(false)
    // }

    // window.addEventListener('resize', () => {
    //     (window.innerWidth <= 600) ? setToggle(true) : setToggle(false)
    // })

    return (
        <header className="header flex justify-between items-center bg-marromAvermelhado h-20 w-full px-28">
            <img className="img-logo rounded-full w-28 h-28 relative top-1/2 z-10" src={Logo} alt="logo"></img>

            <MenuList className='menu-list' onclick={onclick} />

            {
                toggle ?

                <nav className="navbar font-yaLike">
                    <a href="/" className="mr-5 text-titleNavManteiga">HOME</a>
                    <a href="/" className="ml-5 text-titleNavManteiga">CONTATO</a>
                </nav>

                : null
            }
        </header>
    )
}

export default Header;