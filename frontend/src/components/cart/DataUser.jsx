import React, { useState } from "react";
import { Link } from "react-router-dom";


const DataUser = () => {

    // validação do regex para formato brasilieiro
    const regex = /^\d{2}[\s.-]?\d[\s.-]?\d{4}[\s.-]?\d{4}$/; // para formato de número com hifen e espaços

    // Validação de check em radio
    const [selectOption, setSelectionOption] = useState(null);
    const [nameClient, setNameClient] = useState(null);

    console.log('Nome cliente: ', nameClient)

    const handleChange = (event) => {
        setSelectionOption(event.target.value)
    }

    return (
        <>
            <section className="data-user flex flex-col w-40">
                <h3 className='font-yaLike text-defaultBlack mb-6'>Informe seus dados</h3>
                <form action="/" className="form-tag flex flex-col">
                    <label htmlFor="name">Nome: * </label>
                    <input className="style-input style-focus" type="text" id='name' name='name' placeholder='Nome' onChange={(e) => setNameClient(e.target.value)} />
                    <label htmlFor="phone">Contato {`(whatsapp)`}: *</label>
                    <input className="style-input style-focus" type="tel" id='phone' name='phone' placeholder='DDD + Número' pattern={regex} />
                </form>
                <form className="delivey-method mb-8">
                    <h6>Selecione a forma de entrega</h6>
                    <input type="radio" id='delivey' name='delivey' value='Entrega' checked={selectOption === 'Entrega'} onChange={handleChange} />
                    <label htmlFor="delivey">Entrega</label>
                    <br /><hr />
                    <input type="radio" id='pickup local' name='delivery' value='Retirada no local' checked={selectOption === 'Retirada no local'} onChange={handleChange} />
                    <label htmlFor="local">Retirada no local</label>
                </form>
                <form action="/" className='pay-method'>
                    <h6>Selecione a forma de pagamento</h6>
                    <select className="style-focus mb-8" name="payMethod" id="payMethod">
                        <option value="null"></option>
                        <option value="Dinheiro">Dinheiro</option>
                        <option value="Cartão de crédito">Cartão de crédito</option>
                        <option value="Cartão de débito">Cartão de débito</option>
                        <option value="pix">Pix</option>
                    </select>
                </form>
                <form action="/">
                    <h6>Observações</h6>
                    <input className="style-input style-focus" type="text" />
                </form>
                <div className="agree">
                    <input type="checkbox" name="private-check" id="private-check" />
                    <label htmlFor="private-check">Concordo com a <Link to='/'>política da privacidade</Link></label>
                </div>
            </section>
        </>
    )
}

export default DataUser;