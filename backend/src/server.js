// Configuração dotenv
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, './config/.env') })

const data = require('./data-products/data')

// Db
// const db = require('./database/dbConnection')
// console.log(db)

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/products', (req, res) => {
    const sanduiches_product = data.sanduiches
    const bebidas_product = data.bebidas
    const promotion_product = data.promotions 

    const products = { 
        sanduiches: sanduiches_product,
        bebidas: bebidas_product,
        promotions: promotion_product
    }

    if(products){
        res.json(products)
    } else {
        res.status(404).json({message: 'Produto não encontrado'})
    }
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Node Executando na porta", PORT)
})