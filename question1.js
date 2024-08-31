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
    