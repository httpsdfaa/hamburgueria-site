import axios from 'axios';
import React, { useState, useEffect } from 'react';

import SandwichCard from './SandwichCard';
import DrinkCard from './DrinkCard';

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../styles/Multi-styled';
import { CgAdd } from "react-icons/cg";

import getConsolidatedProducts from "../../utils/services";

const font_family = 'font-yaLike';

function Cards({ setProducts, products }) {
    // Constantes para Carousel
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


    console.log(products)

    const [burger, setBurger] = useState([]);
    const [drink, setDrink] = useState([]);
    const [promotion, setPromotion] = useState([]);

    useEffect(() => {
        const axiosBurger = async () => {
            try {
                // fazendo requisição
                const response = await axios.get('http://192.168.100.89:3001/products')
                setBurger(response.data.sanduiches)
                setDrink(response.data.bebidas)
                setPromotion(response.data.promotions)
            } catch (error) {
                console.error('Erro na requisição', error)
            } finally {
                console.log('Requisição finalizada')
            }

        }

        axiosBurger();
        // intervalo de atualização
        const intervalId = setInterval(axiosBurger, 30 * 60 * 1000) // 30 minutos * 60 segundos * 1000 milisegundos. A cada 30 minutos dispara o intervalo para atualização

        // limpa o intervalo quando o componente for desmontado
        return () => clearInterval(intervalId);

    }, [])

    // Ao clicar atualizar produtos em `products`
    const addProductClick = (id, title, image, price, quantity = 1) => {
        // Adiciona o novo produto ao estado
        const updatedProducts = [...products, {
            id: id,
            title: title,
            image: image,
            price: price,
            quantity: quantity
        }];

        // Consolida os produtos após adicionar o novo item
        const consolidatedProducts = getConsolidatedProducts(updatedProducts);

        // Atualiza o estado `products` com a lista consolidada
        setProducts(consolidatedProducts);
    };

    return (
        <>
            <hr className='mx-8' />
            <h2 className='font-yaLike text-2xl my-4'>PROMOÇÕES</h2>
            <section className="carousel">
                <Carousel data-bs-theme="dark">
                    {promotion.map(promotionItem =>
                        <Carousel.Item interval={1000} className='px-32' key={promotionItem.id}>
                            <section className={`promotion ${color_gradient} ${border_24px} ${padding_top} carousel-item`}>
                                <img
                                    className="img-promotion d-block w-80 rounded-full"
                                    src={promotionItem.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption className={`caption pl-8 ${border_properties.thick_l} ${border_properties.color}`}>
                                    <h2 className={`${font_family} ${color_font}`}>{promotionItem.title}</h2>
                                    <ol>
                                        {promotionItem.item1 && <li>{promotionItem.item1}</li>}
                                        {promotionItem.item2 && <li>{promotionItem.item2}</li>}
                                        {promotionItem.item3 && <li>{promotionItem.item3}</li>}
                                        {promotionItem.item4 && <li>{promotionItem.item4}</li>}
                                    </ol>
                                    <span className={`${font_price} ${font_family} ${color_font}`}>R$ {(promotionItem.price / 100).toFixed(2)}</span>
                                    <br /><br />
                                    <Button><CgAdd onClick={() => 
                                        addProductClick(
                                            promotionItem.id,
                                            promotionItem.title,
                                            promotionItem.image,
                                            promotionItem.price,
                                            promotionItem.quantity
                                        )}
                                        className='icons-cards button-add' /></Button>
                                </Carousel.Caption>
                            </section>
                        </Carousel.Item>)}
                </Carousel>
                <hr className='mx-8' />
            </section>

            <h2 className={`${font_family} text-2xl my-4`}>SANDUÍCHES</h2>
            <section id='sanduiches' className='flex flex-wrap items-center justify-center'>

                {
                    burger.map(burgerItem => (
                        <SandwichCard
                            key={burgerItem.id}
                            id={burgerItem.id}
                            title={burgerItem.title}
                            text_description={burgerItem.text_description}
                            image={burgerItem.image}
                            price={burgerItem.price}
                            item1={burgerItem.item1}
                            item2={burgerItem.item2}
                            item3={burgerItem.item3}
                            setProducts={setProducts} // Coletando array de produtos
                            products={products}
                        />

                    )
                    )
                }
            </section>

            <h2 className={`${font_family} text-2xl my-4`}>BEBIDAS</h2>
            <section id='bebidas' className='flex flex-wrap items-center justify-center'>
                {
                    drink.map(drinkItem =>
                        <DrinkCard
                            key={drinkItem.id}
                            id={drinkItem.id}
                            title={drinkItem.title}
                            image={drinkItem.image}
                            price={drinkItem.price}
                            text_description={drinkItem.text_description}
                            item1={drinkItem.item1}
                            item2={drinkItem.item2}
                            setProducts={setProducts} // Coletando array de produtos
                            products={products}
                        />)
                }
            </section>
        </>
    );
}

export default Cards;