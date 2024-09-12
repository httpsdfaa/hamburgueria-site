import axios from 'axios';
import React, { useState, useEffect } from 'react';


import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import ImageSanduiche from '../assets/sanduiche.png';
import ImageBebida from '../assets/coca-cola.jpg';

const marginPrincipal = 'm-12'
const minWidth = 'min-w-96'
const maxWidth = 'max-w-xl'
const font_family = 'font-yaLike'

function SanduicheCard({
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
    item7 = null
}) {
    return (
        <Card style={{ width: '18rem' }} className={`${marginPrincipal} ${minWidth} ${maxWidth}`}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className="text-avermelhadoTittle font-yaLike">
                    <Card.Title>{title}</Card.Title>
                </div>
                <Card.Text>
                    {text_description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {/*LÓGICA PARA DEIXAR NULL OS QUE NÃO SÃO NECESSÁRIOS*/}
                {item1 && <ListGroup.Item>{item1}</ListGroup.Item>}
                {item2 && <ListGroup.Item>{item2}</ListGroup.Item>}
                {item3 && <ListGroup.Item>{item3}</ListGroup.Item>}
                {item4 && <ListGroup.Item>{item4}</ListGroup.Item>}
                {item5 && <ListGroup.Item>{item5}</ListGroup.Item>}
                {item6 && <ListGroup.Item>{item6}</ListGroup.Item>}
                {item7 && <ListGroup.Item>{item7}</ListGroup.Item>}
            </ListGroup>
            <Card.Body>
                <h4 className='text-avermelhadoTittle font-yaLike'>{price}</h4>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

function BebidaCard({
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
    item7 = null
}) {
    return (
        <Card style={{ width: '18rem' }} className={`${marginPrincipal} ${minWidth} ${maxWidth}`}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <div className="text-avermelhadoTittle font-yaLike">
                    <Card.Title>{title}</Card.Title>
                </div>
                <Card.Text>
                    {text_description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {/*LÓGICA PARA DEIXAR NULL OS QUE NÃO SÃO NECESSÁRIOS*/}
                {item1 && <ListGroup.Item>{item1}</ListGroup.Item>}
                {item2 && <ListGroup.Item>{item2}</ListGroup.Item>}
                {item3 && <ListGroup.Item>{item3}</ListGroup.Item>}
                {item4 && <ListGroup.Item>{item4}</ListGroup.Item>}
                {item5 && <ListGroup.Item>{item5}</ListGroup.Item>}
                {item6 && <ListGroup.Item>{item6}</ListGroup.Item>}
                {item7 && <ListGroup.Item>{item7}</ListGroup.Item>}
            </ListGroup>
            <Card.Body>
                <h4 className='text-avermelhadoTittle font-yaLike'>{price}</h4>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}

function Cards() {

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
                        <SanduicheCard
                            key={burgerItem.id}
                            id={burgerItem.id}
                            title={burgerItem.title}
                            text_description={burgerItem.text_description}
                            image={burgerItem.image}
                            price={burgerItem.price}
                            item1={burgerItem.item1}
                            item2={burgerItem.item2}
                            item3={burgerItem.item3}
                        />
                    )
                    )
                }
            </section>

            <h2 className={`${font_family} text-2xl my-4`}>BEBIDAS</h2>
            <section id='bebidas' className='flex flex-wrap items-center justify-center'>
                {
                    drink.map(drinkItem => 
                <BebidaCard
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
                {/* <BebidaCard 
                    id='bebida-b'
                    title='BEBIDA B'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                />
                <BebidaCard 
                    id='bebida-c'
                    title='BEBIDA C'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                />
                <BebidaCard 
                    id='bebida-d'
                    title='BEBIDA D'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                />
                <BebidaCard 
                    id='bebida-e'
                    title='BEBIDA E'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                />
                <BebidaCard 
                    id='bebida-f'
                    title='BEBIDA F'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                />
                <BebidaCard 
                    id='bebida-g'
                    title='BEBIDA G'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                />
                <BebidaCard 
                    id='bebida-h'
                    title='BEBIDA H'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                /> */}
            </section>
        </>
    );
}

export default Cards;