import axios from 'axios';
import React from 'react';


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

    // fazendo requisição
    axios.get('http://localhost:3001/products')
        .then(function(response){
            console.log(response.data.sanduiches)
            const sanduichesIndex = response.data.sanduiches

            // UTILIZAR EFFECTS DIRETO NA TAG PAR JÁ IR RENDERIZANDO OS DADOS
            for(let i in sanduichesIndex){
                const id = sanduichesIndex[i].id
                const title = sanduichesIndex[i].title
                const price = sanduichesIndex[i].price
                const text_description = sanduichesIndex[i].text_description
                const item1 = sanduichesIndex[i].item1
                const item2 = sanduichesIndex[i].tem2
                const item3 = sanduichesIndex[i].item3
                const item4 = sanduichesIndex[i].item4
                const item5 = sanduichesIndex[i].item5
                const item6 = sanduichesIndex[i].item6
                const item7 = sanduichesIndex[i].item7
            }
        }).catch(function(error){
            console.error('erro na requisição', error)
        }).finally(function(){
            console.log('requisição finalizada')
        })

    return (
        <>
            <h2 className={`${font_family} text-2xl my-4`}>SANDUÍCHES</h2>
            <section id='sanduiches'className='flex flex-wrap items-center justify-center'>
                <SanduicheCard
                    id='card-a'
                    title='NOME_SANDUICHE A'
                    text_description='Descrição completa sobre o sanduíche'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                />
                {/* <SanduicheCard
                    id='card-b'
                    title='NOME_SANDUICHE B'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                />
                <SanduicheCard
                    id='card-c'
                    title='NOME_SANDUICHE C'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                />
                <SanduicheCard
                    id='card-d'
                    title='NOME_SANDUICHE D'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                />
                <SanduicheCard
                    id='card-E'
                    title='NOME_SANDUICHE E'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                />
                <SanduicheCard
                    id='card-f'
                    title='NOME_SANDUICHE f'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                />
                <SanduicheCard
                    id='card-g'
                    title='NOME_SANDUICHE G'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                />
                <SanduicheCard
                    id='card-h'
                    title='NOME_SANDUICHE H'
                    image={ImageSanduiche}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='Item 1'
                    item2='Item 2'
                    item3='Para acrescentar mais item seguir os parâmetros'
                /> */}
            </section>

            <h2 className={`${font_family} text-2xl my-4`}>BEBIDAS</h2>
            <section id='bebidas'className='flex flex-wrap items-center justify-center'>
                <BebidaCard 
                    id='bebida-a'
                    title='BEBIDA A'
                    image={ImageBebida}
                    price='R$ 0,000'
                    text_description='Descrição completa sobre o sanduíche'
                    item1='600ml'
                    item2='Para acrescentar mais item seguir os parâmetros'
                />
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