// Configuração dotenv
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path: path.resolve(__dirname, './config/.env') })

// Db
const db = require('./database/dbConnection')
console.log(db)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})


const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("Node Executando na porta", PORT)
})