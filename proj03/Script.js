let valorCompra = parseFloat(prompt("Digite o valor da compra (R$):"));
let regiao = parseInt(prompt("Digite a região (1-Sul, 2-Sudeste, 3-Outras):"));

let frete = 0;

if (valorCompra > 250) {
    frete = 0;
} else {
    if (regiao === 1) {
        frete = 20;
    } else if (regiao === 2) {
        frete = 10;
    } else {
        frete = 30;
    }
}

let total = valorCompra + frete;

let mensagem = `
Valor da compra: R$ ${valorCompra.toFixed(2)}
Frete: R$ ${frete.toFixed(2)}
Total a pagar: R$ ${total.toFixed(2)}
`;

console.log(mensagem);
alert(mensagem);