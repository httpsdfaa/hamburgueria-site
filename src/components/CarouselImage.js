import React from "react"
import Image1 from '../assets/sanduiche.png'
import Image2 from '../assets/coca-cola.jpg'
import Image3 from '../assets/logo.png'

export function ImageOne() {
    return (
        <img src={Image1} />
    )
}

export function ImageSecond() {
    return(
        <img src={Image2} />
    )
}

export function ImageThird() {
    return(
        <img src={Image3} />
    )
}

