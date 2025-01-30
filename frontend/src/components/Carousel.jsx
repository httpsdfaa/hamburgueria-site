import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/Carousel.css'

function CarouselSlide({
  id,
  title,
  price
}) {
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

      <Carousel data-bs-theme="dark">
            <Carousel.Item interval={1000} className='px-32' key={id}>
              <section className={`promotion ${color_gradient} ${border_24px} ${padding_top} carousel-item`}>
                <Carousel.Caption className={`caption pl-8 ${border_properties.thick_l} ${border_properties.color}`} key={id}>
                  <h2 className={`${font_family} ${color_font}`}>{title}</h2>
                  <span className={`${font_price} ${font_family} ${color_font}`}>R$ {(price / 100).toFixed(2)}</span>
                  <br /><br />
                </Carousel.Caption>
              </section>
            </Carousel.Item>
      </Carousel>
      <hr className='mx-8' />
    </>
  );
}

export default CarouselSlide;