import React from "react";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { CgAdd } from "react-icons/cg";

import Button from '../../styles/Multi-styled';

import getConsolidatedProducts from "../../utils/services";

const marginPrincipal = 'm-12'
const minWidth = 'min-w-96'
const maxWidth = 'max-w-xl'

function SandwichCard({
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

    const addProductClick = () => {
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
                <h4 className='text-avermelhadoTittle font-yaLike'>{(price / 100).toFixed(2)}</h4>
                <Button><CgAdd onClick={addProductClick} className='icons-cards button-add' /></Button>
            </Card.Body>
        </Card>
    );
}

export default SandwichCard;