import React, { useState, useEffect } from "react";

import {time, hour} from "./time";

import '../styles/Info.css'

function Info() {
    // Dias que o estabelecimento não funcionará
    const dayClose = {
        1: 'segunda-feira',
        2: 'terça-feira'
    }

    const [toggle, setToggle] = useState(false)

    const today = time()
    const hour_const = hour() // 20

    // Caso seja Segunda ou terça mostrará fechado
    useEffect(() => {
        // Comparando se o estabelecimento estará ou não fechado
        if(today === dayClose[1] || today === dayClose[2]){
            setToggle(false)
        } else if(hour_const >= 0 && hour_const < 19) {
            setToggle(false)
        } else {
            setToggle(true)
        }

    }, [today, hour_const])

    return (
        <section className="info flex px-16 py-6 justify-between bg-[#F9F9F9]">
            <span className="time-func">
                Funcionamento<br />
                19h00 às 23h00
            </span>
            <div className="open-close">
                {// Open or close dependendo do dia da semana
                    toggle ?
                        <span className="open text-[#3E9205]">ABERTO</span>
                        :
                        <span className="close text-[#E90F0F]">FECHADO</span>
                }
            </div>
            <span className="time-wait">
                Tempo de espera<br />
                30min - 50min
            </span>
        </section>
    )
}

export default Info;