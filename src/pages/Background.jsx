import React from "react";

import BgBanner from "../assets/banner-bg.png"

function Background() {
    return (
        <aside className="bg w-full relative">
            <img src={BgBanner} alt="Background-foto"/>
            <div className="absolute inset-0 flex items-center justify-center font-yaLike text-[#F1E4D3] text-6xl">
                <h1 className="bg ">Hamburgueres</h1>
            </div>
        </aside>
    )
}

export default Background;