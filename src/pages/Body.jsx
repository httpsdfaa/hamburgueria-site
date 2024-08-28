import React from "react";

import "../styles/Body.css"
import PhotoBurger from '../assets/sanduiche.png'

function Body() {
    return (
        <main className="body">
            <section className="promotion mx-32 border-y-2 border-borderColor py-10"> 
                <h1 className="title-market font-yaLike text-2xl">PROMOÇÕES</h1>
                <section className="flex items-center justify-center bg-gradient-to-b from-[#EAEAEA] to-[#F5F5F5] rounded-2xl">
                    <div className="dv-promotion border-r-2 border-borderColor px-10">
                        <section className="sc-promotion">
                            <h1 className="title-product font-yaLike text-3xl">NOME_COMBO</h1>
                            <ul className="list-option">
                                <ol>Acompanhamento 1</ol>
                                <ol>Acompanhamento 2</ol>
                                <ol>Acompanhamento 3</ol>
                                <ol>etc...</ol>
                            </ul>
                            <span className="price font-yaLike text-2xl">R$ 50,00</span>
                        </section>
                    </div>
                    <img src={PhotoBurger} alt="marketing=photo" className="rounded-full mx-10 w-52 h-52" />
                </section>
            </section>
        </main>
    )
}

export default Body;