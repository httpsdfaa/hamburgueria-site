const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs')
const dotenv = require('dotenv')
const path = require('path')

// configurando dotenv
dotenv.config({ path: path.resolve(__dirname, '../config/.env') })

// URI string
const uri = process.env.DATABASE_URL

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function crud() {

    const db = client.db('db_burger');
    const collection = db.collection('teste_server');

    try {
        // await collection.insertOne(
        //     {
        //         name: 'Deivison3',
        //         age: 26,
        //         status: 'teste de create'
        //     }
        // )

        const dados = await collection.find({
            name: { $in: ["Deivison", "Deivison2"] } // Recupara os dois dados
        }).toArray(); // Sempre colocar como array para que trate em formato Array e não BSON

        return dados
    } finally {
        await client.close()
    }
}

async function storeImage() {
    try {
        const db = client.db('db_burger');
        const collection = db.collection('image_data');

        const imageBanner = `D:\projects\hamburgueria-site\backend\assets\banner-bg.png`
        const imageCocaCola = 'D:\projects\hamburgueria-site\backend\assets\coca-cola.jpg'
        const imageLogo = 'D:\projects\hamburgueria-site\backend\assets\logo.png'
        const Imagesanduiche = 'D:\projects\hamburgueria-site\backend\assets\sanduiche.png'

        const imagePathArray = [imageBanner, imageCocaCola, imageLogo, Imagesanduiche]

        for (let i = 0; i < imagePathArray; i++) {
            const imageData = fs.readFileSync(imagePathArray)

            const result = await collection.insertOne({
                name: 'image-site',
                data: imageData
            })

            return result
        }

    } finally {
        await client.close()
    }
}





async function run() {
    try {
        // conectar o cliente no servidor
        await client.connect();
        console.log('Conectado ao Mongo Atlas')

        // const dados = await crud();
        // console.log('dados encontrados: ', dados)

        await storeImage()
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}
run().catch(console.dir);