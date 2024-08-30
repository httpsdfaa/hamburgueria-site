import React from "react";

import "../styles/Body.css"
// import PhotoBurger from '../assets/sanduiche.png'
import CarouselSlide from "../components/Carousel";

function Body() {
    return (
        <main className="body">
            <CarouselSlide />
        </main>
    )
}

export default Body;