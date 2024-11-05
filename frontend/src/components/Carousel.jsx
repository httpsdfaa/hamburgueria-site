import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
// import { ImageOne, ImageSecond, ImageThird } from './CarouselImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../styles/Multi-styled';
import { CgAdd } from "react-icons/cg";

import getConsolidatedProducts from "../utils/services";

import '../styles/Carousel.css'

function CarouselSlide({
  id,
  title,
  text_description,
  image,
  price,
  item1 = null,
  item2 = null,
  item3 = null,
  item4 = null,
  item5 = null,
  item6 = null,
  item7 = null,
  setProducts, // props para armazenar valores de produtos
  products, // Recebe products como prop
  quantity = 1
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

  const addProductClick = (id, title, price, image) => {
    // Adiciona o novo produto ao estado
    let updatedProducts = [...products, {
      id: id,
      title: title,
      image: image,
      price: price,
      quantity: quantity
    }]

    console.log(products)

    // // Consolida os produtos após adicionar o novo item
    // const consolidatedProducts = getConsolidatedProducts(updatedProducts);

    // // Atualiza o estado `products` com a lista consolidada
    // setProducts(consolidatedProducts);
  }

  return (
    <>

      <Carousel data-bs-theme="dark">
        {/* {
          products.map(item => */}
            <Carousel.Item interval={1000} className='px-32' key={id}>
              <section className={`promotion ${color_gradient} ${border_24px} ${padding_top} carousel-item`}>
                <img
                  className="img-promotion d-block w-80 rounded-full"
                  // src={item.image}
                  alt="First slide"
                />
                <Carousel.Caption className={`caption pl-8 ${border_properties.thick_l} ${border_properties.color}`} key={id}>
                  <h2 className={`${font_family} ${color_font}`}>{title}</h2>
                  <ol>
                    {/* {item.item1 && <li>{item.item1}</li>}
                    {item.item2 && <li>{item.item2}</li>}
                    {item.item3 && <li>{item.item3}</li>}
                    {item.item4 && <li>{item.item4}</li>} */}
                  </ol>
                  <span className={`${font_price} ${font_family} ${color_font}`}>R$ {(price / 100).toFixed(2)}</span>
                  <br /><br />
                  {/* <Button><CgAdd onClick={() => 
                    addProductClick(
                      item.id,
                      item.title,
                      item.price,
                      item.image)} 
                    className='icons-cards button-add' /></Button> */}
                </Carousel.Caption>
              </section>
            </Carousel.Item>
          {/* )} */}
      </Carousel>
      <hr className='mx-8' />
    </>
  );
}

export default CarouselSlide;