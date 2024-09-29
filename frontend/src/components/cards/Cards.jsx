import axios from 'axios';
import React, { useState, useEffect } from 'react';

import SandwichCard from './SandwichCard';
import DrinkCard from './DrinkCard';

import '../../styles/Cards.css';


const font_family = 'font-yaLike';

function Cards({setId, setTitle, setPrice}) {

    const [burger, setBurger] = useState([]);
    const [drink, setDrink] = useState([]);

    useEffect(() => {
        const axiosBurger = async () => {
            try {
                // fazendo requisição
                const response = await axios.get('http://localhost:3001/products')
                setBurger(response.data.sanduiches)
                setDrink(response.data.bebidas)
            } catch (error) {
                console.error('Erro na requisição', error)
            } finally {
                console.log('Requisição finalizada')
            }

        }

        axiosBurger();
        setInterval(axiosBurger, 30 * 60 * 1000) // 30 minutos * 60 segundos * 1000 milisegundos. A cada 30 minutos dispara o intervalo para atualização
    }, [])

    return (
        <>

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
                            setId={setId} // Chamando o setId para atualizar o valor no estado
                            setTitle={setTitle} // Chamando o setTitle para atualizar o valor no estado
                            setPrice={setPrice} // Chamando o setPrice para atualizar o valor no estado
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
                        />)
                }
            </section>
        </>
    );
}

export default Cards;