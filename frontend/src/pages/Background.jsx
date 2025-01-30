import React from "react";

import BgBanner from "../assets/banner-bg.png"

function Background() {
    return (
        <aside className="bg w-full relative">
            <img src={BgBanner} alt="Background-foto"/>
        </aside>
    )
}

export default Background;