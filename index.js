// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?


function soma () {
let INDICE = 13;
let SOMA = 0;

    for (let K = 0; K <= INDICE; K++) {
        SOMA = SOMA + K;
    }

   return console.log('O resultado de SOMA é ' + SOMA);
};

soma();


// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

// Função para verificar se um número pertence à sequência de Fibonacci

function fibonacci(numero) {
    let a = 0;
    let b = 1;
    
    while (b <= numero) {
        if (b === numero) {
            return console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
        }

        let temp = b;
        b = a + b;
        a = temp;
    }
    
    return console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);; 
};


fibonacci(13); //insira o número que deseja verificar se pertence à sequência de Fibonacci


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

// Exibe os resultados
console.log(`Menor valor de faturamento: R$${menorFaturamento.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$${maiorFaturamento.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);


// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

const faturamentoEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

// Calcula o valor total do faturamento mensal
const totalFaturamento = Object.values(faturamentoEstados).reduce((acc, valor) => acc + valor, 0);

const percentualPorEstado = Object.entries(faturamentoEstados).map(([estado, valor]) => {
    return console.log([estado, (valor / totalFaturamento).toFixed(3) * 100]+ '%');
}
);


// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function reverseString(string) {
    let stringInvertida = '';

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }

    return console.log(stringInvertida);
}

reverseString('Target Sistemas Test'); //insira a string que deseja inverter