import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
// import { ImageOne, ImageSecond, ImageThird } from './CarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../assets/sanduiche.png';
import '../styles/Carousel.css'

function CarouselSlide() {
  const color_gradient = 'bg-gradient-to-b from-[#EAEAEA] to-[#F5F5F5]'
  const border_24px = 'rounded-3xl'
  const padding_top = 'py-11'
  const font_price = 'text-2xl'
  const font_family = 'font-yaLike'
  const color_font = 'text-avermelhadoTittle'
  const border_properties = {
    thick_l: 'border-l-2',
    color: 'border-[#E0E0E0]',
  }

  return (
    <>
      <hr className='mx-8 '/>
      <p className={`${font_family} text-2xl my-4`}>PROMOÇÕES</p>
      <Carousel data-bs-theme="dark">
        <Carousel.Item interval={1000} className='px-32'>
          <section className={`promotion ${color_gradient} ${border_24px} ${padding_top}`}>
            <img
              className="d-block w-80 rounded-full"
              src={ImageOne}
              alt="First slide"
            />
            <Carousel.Caption className={`caption pl-8 ${border_properties.thick_l} ${border_properties.color}`}>
              <h2 className={`${font_family} ${color_font}`}>NOME_COMBO 1</h2>
              <ol>
                <li>Acompanhamento 1</li>
                <li>Acompanhamento 2</li>
                <li>Acompanhamento 3</li>
                <li>...</li>
                <li>Acompanhamento N</li>
              </ol>
              <span className={`${font_price} ${font_family} ${color_font}`}>R$ 50,00</span>
            </Carousel.Caption>
          </section>
        </Carousel.Item>
        <Carousel.Item interval={500} className='px-32'>
          <section className={`promotion ${color_gradient} ${border_24px} ${padding_top}`}>
            <img
              className="d-block w-80 rounded-full"
              src={ImageOne}
              alt="Second slide"
            />
            <Carousel.Caption className={`caption pl-8 ${border_properties.thick_l} ${border_properties.color}`}>
              <h2 className={`${font_family} ${color_font}`}>NOME_COMBO 2</h2>
              <ol>
                <li>Acompanhamento 1</li>
                <li>Acompanhamento 2</li>
                <li>Acompanhamento 3</li>
                <li>...</li>
                <li>Acompanhamento N</li>
              </ol>
              <span className={`${font_price} ${font_family} ${color_font}`}>R$ 50,00</span>
            </Carousel.Caption>
          </section>
        </Carousel.Item>
        <Carousel.Item className='px-32'>
          <section className={`promotion ${color_gradient} ${border_24px} ${padding_top}`}>
            <img
              className="d-block w-80 rounded-full"
              src={ImageOne}
              alt="Third slide"
            />
            <Carousel.Caption className={`caption pl-8 ${border_properties.thick_l} ${border_properties.color}`}>
              <h2 className={`${font_family} ${color_font}`}>NOME_COMBO 3</h2>
              <ol>
                <li>Acompanhamento 1</li>
                <li>Acompanhamento 2</li>
                <li>Acompanhamento 3</li>
                <li>...</li>
                <li>Acompanhamento N</li>
              </ol>
              <span className={`${font_price} ${font_family} ${color_font}`}>R$ 50,00</span>
            </Carousel.Caption>
          </section>
        </Carousel.Item>
      </Carousel>
      <hr className='mx-8'/>
    </>
  );
}

export default CarouselSlide;