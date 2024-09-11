const { MongoClient, ServerApiVersion } = require('mongodb');
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

async function run() {
    try {
        // conectar o cliente no servidor
        await client.connect();
        console.log('Conectado ao Mongo Atlas')

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

}
run().catch(console.dir);