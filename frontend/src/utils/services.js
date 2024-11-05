// Função para consolidar os produtos
const getConsolidatedProducts = (products) => {
    const counts = products.reduce((acc, item) => {
        if (acc[item.id]) {
            const totalQuantity = acc[item.id].quantity += item.quantity; // Incrementa a quantidade se já existir

            // Atualiza o preço total, usando centavos para evitar perda de precisão
            acc[item.id].price = item.price * item.quantity // Guarda o valor em centavos

            // Mostrando os valores em reais
            acc[item.id].totalPriceReal = (acc[item.id].price / 100).toFixed(2);
        } else {
            acc[item.id] = { ...item }; // Adiciona produto com quantidade inicial
        }
        return acc;
    }, {});
    return Object.values(counts);
};

module.exports =  getConsolidatedProducts;