let idade = parseInt(prompt("Digite sua idade:"));
let estudante = prompt("Você é estudante? (sim/não)").toLowerCase();
let valorIngresso = 40;
if (idade < 12 || idade > 60 || estudante === "sim") {
    valorIngresso = 20;
}
alert("O valor do ingresso é: R$ " + valorIngresso.toFixed(2));