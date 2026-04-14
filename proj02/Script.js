let valorpedido = Number(prompt("Insira o valor do pedido:"));
let cartaofidelidade = prompt("Você possui o cartão fidelidade? (sim/não)");

if (valorpedido > 50.00 && cartaofidelidade === "sim") {
    alert(`Você ganhou um desconto de 10%. O valor final da sua compra é R$ ${(valorpedido * 0.90).toFixed(2)}`);
} else if (valorpedido > 50.00) {
    alert("Você ganhou um Cookie de brinde! O valor final é R$ " + valorpedido.toFixed(2));
} else {
    alert("Obrigado pela compra! Valor: R$ " + valorpedido.toFixed(2));
}