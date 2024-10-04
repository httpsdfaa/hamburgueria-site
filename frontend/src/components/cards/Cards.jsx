import axios from 'axios';
import React, { useState, useEffect } from 'react';

import SandwichCard from './SandwichCard';
import DrinkCard from './DrinkCard';

const font_family = 'font-yaLike';

function Cards({ setProducts }) {

    const [burger, setBurger] = useState([]);
    const [drink, setDrink] = useState([]);


    useEffect(() => {
        const axiosBurger = async () => {
            try {
                // fazendo requisição
                const response = await axios.get('http://192.168.100.89:3001/products')
                setBurger(response.data.sanduiches)
                setDrink(response.data.bebidas)
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
                            setProducts={setProducts} // Coletando array de produtos
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