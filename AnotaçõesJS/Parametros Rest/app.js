// São funções parametrizadas porem com um novo padrão
// é uma forma de função onde não é necessario especificar a quantidade de parametros

function soma1(...valores) { // a partir daqui o valores pode ser considerado um array
    let tam = valores.length; // pega a quantidade de valores no array valores
    let res = 0;
    
    for (let i=0;i<tam;i++) {
        res += valores[i]; // soma todos os elementos do array valores
    }
    return res;
}

console.log(soma1(10,25)); // saida

function soma2(...valores) {
    let tam = valores.length;
    let res = 0;

    for (let v of valores) { // estrutura de repetição mais rencomendada para percorrer arrays
        res+=v;
    }
    return res;
}

console.log(soma2(120,34))

function somar(...numeros) {
    return numeros.reduce((total, num) => total + num, 0);
}

console.log(somar(1, 2, 3));  // Saída: 6
console.log(somar(4, 5, 6, 7));  // Saída: 22

function encontrarMaior(...numeros) {
    return Math.max(...numeros);
}

console.log(encontrarMaior(5, 10, 3, 8));  // Saída: 10

// Anotação
// Basicamente os parametros rest devem ser usados quando não se sabe a quantidade de parametros que será recebida em uma função