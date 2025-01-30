const { MercadoPagoConfig, Payment } = require('mercadopago');
const { v4: uuidv4 } = require('uuid'); // Importando a função para gerar UUIDs

function mercadoPagoConfig(transaction_amount, description, payment_method_id, email, issuer_id, ) {

    const idempotencyKey = uuidv4();

    // Inicializando o client
    const client = new MercadoPagoConfig({
        accessToken: 'TEST-7826225987722017-110616-32d039a178487df23ae8366909888f9e-557330444',
        options: { timeout: 5000, idempotencyKey}
    });

    // Inicializando a API
    const payment = new Payment(client);

    // Criando requisição
    const body = {
        issuer_id,
        payment_method_id,
        transaction_amount: transaction_amount,
        description: description,
        payment_method_id: payment_method_id,
        payer: {
            email: email, // email do pagador
            identification: {
                type: 'CPF',
                number: '12345678909'
            }
        }
    };

    // Fazendo requisição
    payment.create({ body }).then(console.log).catch(console.log)
}

module.exports = mercadoPagoConfig;