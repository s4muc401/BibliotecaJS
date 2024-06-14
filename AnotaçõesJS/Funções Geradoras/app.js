// Funções geradoras tem o seu retorno adiado ate quando se precisar do retorno

function* cores() { // para funções geradoras precisa-se usar o function* 
    yield "verde";
    yield "vermelho";
    yield "azul";
}

let iteradorCores = cores(); // primeira chamada cria o iterador
console.log(iteradorCores.next().value); // pega o proximo yield da função
console.log(iteradorCores.next().value); 
console.log(iteradorCores.next().value); 

// cada chamnada possui o seu controle de retorno de conteudos

function* perguntas() {
    const nome = yield "Qual seu nome? ";
    const esporte = yield "Qual seu esporte favorito? ";
    return `seu nome é ${nome} e seu esporte favorito é ${esporte}`
}

const iteradorPerguntas = perguntas();
console.log(iteradorPerguntas.next("Matheus").value); 
console.log(iteradorPerguntas.next("Dormir").value); 

function* contador() {
    let i = 0;
    while (true) {
        yield i++;
        if (i>10) {
            break
        }
    }
}

const iteradorContador = contador();
for (let v of iteradorContador) {
    console.log(v);
}

// Anotações e complemetos
// Funções geradoras são úteis em situações onde você precisa lidar com sequências de dados potencialmente grandes, mas não quer carregar todos os elementos na memória de uma vez.

