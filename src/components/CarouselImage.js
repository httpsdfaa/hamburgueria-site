import React from "react"
import Image1 from '../assets/sanduiche.png'
import Image2 from '../assets/coca-cola.jpg'
import Image3 from '../assets/logo.png'

export function ImageOne() {
    return (
        <img src={Image1} className="rounded-full"/>
    )
}

export function ImageSecond() {
    return(
        <img src={Image2} className="rounded-full"/>
    )
}

export function ImageThird() {
    return(
        <img src={Image3} className="rounded-full"/>
    )
}

