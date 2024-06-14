// funções que não possuem um nome e são criadas em tempo de execução

const f = function(v1,v2) { return v1 + v2 }

console.log(f(10,5));

const soma = function(...valores) {
    let res = 0;
    for (let v of valores) {
        res += v;
    }
    return res;
}

console.log(soma(10,30));

// Funções construtoras em Funções anonimas de forma SIMPLES
// sempre o ultimo parametro da funçãi deve ser o corpo
const s = new Function("v1","v2","return v1 + v2");

console.log(s(1,5));

// Anotação 
// No caso das funções anonimas por serem simples vc pode usa-las para tarefas simples como:
// inicializar classes (metodo contrutor)
// callbaks de eventos, arrays e outras funções.

const numeros = [1, 2, 3, 4];
const dobrados = numeros.map(function(n) {
    return n * 2;
});

console.log(dobrados);

// Escrevendo a propria função anonima de callback
const array = [1,2,3,4];
array.forEach(function(item) {
    console.log(item);
});

// Explicação
// criamos uma função anonima que percorre o array meio que complementando a funcionalidade do foreach

const validarSenha = function(senha) {
    // A função anônima verifica se a senha atende aos critérios desejados
    const comprimentoMinimo = 8;
    const temNumero = /\d/.test(senha);
    const temLetraMaiuscula = /[A-Z]/.test(senha);
    const temLetraMinuscula = /[a-z]/.test(senha);

    return (
        senha.length >= comprimentoMinimo &&
        temNumero &&
        temLetraMaiuscula &&
        temLetraMinuscula
    );
};

// Exemplo de uso
const senha1 = "Senha123";
const senha2 = "abc123";

console.log(validarSenha(senha1));  // Saída: true
console.log(validarSenha(senha2));  // Saída: false

// Nossa propria função
const validarIdade = function(idade,altura) {
    const idadeMinima = 16;
    const alturaMinima = 1.68;

    return (idade >= idadeMinima && altura >= alturaMinima);
}

const idade1 = 13;
const altura1 = 1.71;
const idade2 = 18;
const altura2 = 1.78;

console.log(validarIdade(idade1,altura1)); // Saída: false
console.log(validarIdade(idade2,altura2)); // Saída: true