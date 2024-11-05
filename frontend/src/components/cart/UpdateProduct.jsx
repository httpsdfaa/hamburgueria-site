import React from "react";
import Button from "react-bootstrap/Button";

const UpdateProduct = () => {
    return (
        <>
            <div className="update-product">
                <span className='mx-2'>Adicione mais produtos</span>
                <Button className="mx-2" variant='primary' size='sm'> + produtos</Button>
            </div>
        </>
    )
}

export default UpdateProduct;