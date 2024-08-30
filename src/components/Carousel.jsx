import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
// import { ImageOne, ImageSecond, ImageThird } from './CarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageOne from '../assets/sanduiche.png';
import '../styles/Carousel.css'

function CarouselSlide() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <section className="promotion">
          <img
            className="d-block w-50"
            src={ImageOne}
            alt="First slide"
          />
          <Carousel.Caption className='caption'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </section>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <section className="promotion">
          <img
            className="d-block w-50"
            src={ImageOne}
            alt="Second slide"
          />
          <Carousel.Caption className='caption'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </section>
      </Carousel.Item>
      <Carousel.Item>
        <section className="promotion">
          <img
            className="d-block w-50"
            src={ImageOne}
            alt="Third slide"
          />
          <Carousel.Caption className='caption'>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </section>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlide;