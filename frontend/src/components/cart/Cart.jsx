import React from 'react';

import '../../styles/Cart.css';

const Cart = ({ id, title, price }) => {



    const PRODUTOSDEV = [
        { id: 100, title: 'NOME_SANDUICHE A', price: `R$${0.50}`, text_description: 'Descrição completa sobre o sancuíche', image: 'https://raw.githubusercontent.com/httpsdfaa/hamburgueria-site/main/assets/sanduiche.png', item1: 'Item 1', item2: 'item 2', item3: 'Item N', item4: '', item5: '', item6: '', item7: '' },
        { id: 101, title: 'NOME_SANDUICHE B', price: `R$${0.50}`, text_description: 'Descrição completa sobre o sancuíche', image: 'https://raw.githubusercontent.com/httpsdfaa/hamburgueria-site/main/assets/sanduiche.png', item1: 'Item 1', item2: 'item 2', item3: 'Item N', item4: '', item5: '', item6: '', item7: '' },
        { id: 102, title: 'NOME_SANDUICHE C', price: `R$${0.50}`, text_description: 'Descrição completa sobre o sancuíche', image: 'https://raw.githubusercontent.com/httpsdfaa/hamburgueria-site/main/assets/sanduiche.png', item1: 'Item 1', item2: 'item 2', item3: 'Item N', item4: '', item5: '', item6: '', item7: '' }
    ]


    return (

        <section className="section-cart flex flex-col h-full w-full z-30 bg-defaultBody" id="section-cart">
            <h1 className='font-yaLike text-defaultBlack'>Meu pedido</h1>

            {/* Checando se o array está vazio
            {productsCart.length === 0 ? <NotProduct />
                : null
            } */}
            <div>
                <span>ID: {id} - {title} - {price}</span> 
            </div>
        </section>
    );
}

export default Cart;






