import React from "react";
import MapsGoogle from "../components/Maps.tsx";

import Logo from '../assets/logo.png'

function Footer() {
    return(
        <footer className="footer relative bg-gradient-to-b from-[#3D2727] to-[#4C3234] text-[#FFFFFF] font-libreFranklin h-80">
            <section className="info flex items-center justify-around inset-y-1/3 px-16 pt-16">
                <p>CNPJ:11.111.111/0001-11<br />
                    Av.endereço rua, bairro, 999<br />
                    Vespasiano, Minas gerais - MG, 11111-11    
                </p>
                <img src={Logo} alt="logo" className="rounded-full w-40"/>
            </section>
            <MapsGoogle />
            <section className="developer absolute bottom-0 text-center w-full border-t-2 py-6">Copyright© 2024 - Deivison Andrade</section>
        </footer>
    )
}

export default Footer;