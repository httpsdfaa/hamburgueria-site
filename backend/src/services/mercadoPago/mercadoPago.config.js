const { MercadoPagoConfig, Payment } = require('mercadopago');

function mercadoPagoConfig(transaction_amount, description, payment_method_id, email) {
    // Inicializando o client
    const client = new MercadoPagoConfig({
        accessToken: 'TEST-7826225987722017-110616-32d039a178487df23ae8366909888f9e-557330444',
        options: { timeout: 5000, idempotencyKey: 'abc' }
    });

    // Inicializando a API
    const payment = new Payment(client);

    // Criando requisição
    const body = {
        transaction_amount: transaction_amount,
        description: description,
        installments: Number("20"),
        payment_method_id: payment_method_id,
        payer: {
            email: email, // email do pagador
            // identification: {
            //     type: req.identificationType,
            //     number: req.number
            // }
        }
    };

    // Fazendo requisição
    payment.create({ body }).then(console.log).catch(console.log)
}

module.exports = mercadoPagoConfig;