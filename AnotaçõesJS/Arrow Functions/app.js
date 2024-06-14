// arrow functions ou funções lambdas são mecanismos concisos para representar funções anonimas

const soma = (v1,v2) => {return v1+v2}

console.log(soma(10,5));

// funções com somente um parametro não precisa de parametros
const nome = n => {return n}

console.log(nome("Ethel"));

// quando eu não uso o return eu não preciso por as chaves
const add = n => n + 10;

console.log(add(10));

// Função tradicional
const soma2 = function(a, b) {
    return a + b;
};

// Função arrow
const somaArrow = (a, b) => a + b;

const numeros = [1, 2, 3, 4];
const quadrados = numeros.map(numero => numero ** 2);

// funções de callback em arraw function
const usuarios = ['Alice', 'Bob', 'Charlie'];

// Função tradicional
const usuariosMaiusculos = usuarios.map(function(nome) {
    return nome.toUpperCase();
});

// Função arrow
const usuariosMaiusculosArrow = usuarios.map(nome => nome.toUpperCase());

// Funções inline
const resultado = (a,b) => a + b;
console.log(resultado(10,10));

const resultado2 = ((a,b) => a+b)(2,3);
console.log(resultado2);

// Anotaçoes e complementos
// As funções arrow não têm seu próprio this. Elas herdam o this do contexto em que foram definidas. Isso pode ser útil em situações onde o comportamento do this é crítico, como em callbacks de eventos ou funções dentro de métodos de objetos.

function Pessoa() {
    this.idade = 0; // this da função Pessoa()

    setInterval(() => {
        this.idade++; // this da função Pessoa()
        console.log(this.idade);
    }, 1000);
}

const pessoa = new Pessoa();  // A cada segundo, a idade é incrementada e impressa no console
