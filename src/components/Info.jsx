import React from "react";

function Info() {
    return(
        <section className="info flex px-16 py-6 justify-between bg-[#F9F9F9]">
            <span className="time-func">
                Funcionamento<br />
                19h00 às 23h00
            </span>
            <div className="open-close">
                <span className="open text-[#3E9205]">ABERTO</span>
                <br />
                <span className="close text-[#E90F0F]">FECHADO</span>
            </div>
            <span className="time-wait">
                Tempo de espera<br />
                30min - 50min
            </span>
        </section>
    )
}

export default Info;