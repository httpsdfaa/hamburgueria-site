import React from "react";

import "../styles/Body.css"
// import PhotoBurger from '../assets/sanduiche.png'
import CarouselSlide from "../components/Carousel";
import Cards from '../components/Cards';

function Body() {
    return (
        <main className="body">
            <CarouselSlide />
            <Cards />
        </main>
    )
}

export default Body;