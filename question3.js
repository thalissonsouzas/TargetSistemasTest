// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;



const faturamentoDiario = [
    1500, 0, 0, 2500, 3200, 0, 0, 2000, 1800, 1700, 0, 2100, 2500,
    0, 1900, 0, 2200, 2400, 2000, 0, 1500, 0, 2500, 2700, 0, 2000,
    1800, 0, 2200, 0, 2300, 0, 2600, 0, 0, 0, 0, 0, 2100, 2300,
    0, 2200, 2500, 0, 1800, 0, 1900, 0, 2000, 2100, 0, 1800
];


// Removemos os dias sem faturamento e calculamos o menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoDiario.filter(valor => valor > 0));

// Removemos os dias sem faturamento e calculamos o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoDiario.filter(valor => valor > 0));

// Agora calculamos a média mensal de faturamento
const diasComFaturamento = faturamentoDiario.filter(valor => valor > 0);
const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
const mediaMensal = somaFaturamento / diasComFaturamento.length;

// Conta o número de dias em que o faturamento diário foi superior à média mensal
const diasAcimaDaMedia = faturamentoDiario.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);