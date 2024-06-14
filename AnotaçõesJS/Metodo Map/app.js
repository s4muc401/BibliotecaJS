// Metodo map serve para percorrer listas diferente dos for que percorrem listas no map trabalhamos com toda a coleção sem precisar parar no meio

const cursos = ["html","css","javascript","java"];
cursos.map((elemento,indice)=>{
    console.log(`curso: ${elemento} posição do curso ${indice}`);
});

let c = cursos.map((elemento)=>{
    return elemento;
});
console.log(c);

// usando o map com html
let elementos = document.getElementsByTagName("div");
console.log(elementos);
elementos = [...elementos];

elementos.map((elemento,indice)=>{
    elemento.innerHTML = "Cursos";
    console.log(elemento.innerHTML);
});

const converterInt=(e)=>parseInt(e);
let num = ["1","2","3","4"].map(converterInt);
console.log(num);

// Basicamente como pode se ver no map nos podemos colocar funções para serem executadas diretamente na propria lista

// Anotações e complementos
// em JavaScript é usado para iterar sobre todos os elementos de um array e criar um novo array com os resultados de uma função aplicada a cada elemento. Aqui estão algumas situações comuns em que você pode querer usar o método 

const numbers = [1,2,3,4,5,6];
const numbersSquare = numbers.map(num=>(num*num));
console.log(numbersSquare);

// Criação de elementos em paginas web
const names = ["tony","effy"];
const listItems = names.map(name => `<li>${name}<li>`);
console.log(listItems);

// Extraçaõ de propriedade especificas em um objeto
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 3, name: "Doe" }
];
const userIds = users.map(user => user.id);
// Resultado: [1, 2, 3]