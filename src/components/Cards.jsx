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
                <SanduicheCard
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
                />
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
                <BebidaCard 
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
                />
            </section>
        </>
    );
}

export default Cards;