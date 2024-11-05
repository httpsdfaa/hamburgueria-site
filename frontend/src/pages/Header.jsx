import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png"
import MenuList from "../assets/icons/MenuList";
import CloseIcon from "../assets/icons/CloseIcon";
import CartIcon from "../assets/icons/CartIcon";

import '../styles/Header.css'


function Header({products}) {

    const navigate = useNavigate();

    const [toggle, setToggle] = useState(true ? window.innerWidth > 600 : false);
    const [countProduct, setCountProduct] = useState()
    const [isVisible, setIsVisible] = useState(false);

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

    const openCart = () => {
        navigate('/carrinho')
    }

    const handleScroll = () => {
        const eixoY = window.scrollY
        
        eixoY >= 210 ? setIsVisible(true) : setIsVisible(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        // contagem de produtos
        setCountProduct(products.length);
        return () => { window.addEventListener("scroll", handleScroll); }
    }, [products, setCountProduct])

    return (
        <header style={{ position: isVisible ? 'fixed' : 'relative', zIndex: 1000 }} className={`${isVisible ? 'visibleFixed' : null} header flex justify-between items-center bg-marromAvermelhado h-16 w-full px-20`}>

            {/* Botão para navegar para a página carrinho */}
            <button onClick={openCart} className="div-cart-icon">
                <CartIcon className="icon-cart" />
                <span className="index-cart">{countProduct}</span>
            </button>
            <img className="img-logo rounded-full w-28 h-28 relative top-1/2 z-30" src={Logo} alt="logo"></img>

            {
                // Caso navbar esteja não redenrizado mostrar icon menu
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
                        <Link to="/" className="mr-5 text-titleNavManteiga">HOME</Link>
                        <a href="#footer" className="ml-5 mr-5 text-titleNavManteiga">CONTATO</a>
                    </nav> : null
            }
        </header >
    )
}

export default Header;