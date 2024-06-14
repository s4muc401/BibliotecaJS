// querySelector e querySelectorAll são métodos em JavaScript que permitem selecionar elementos HTML em uma página usando seletores CSS. Aqui estão algumas diferenças entre eles:

// querySelector:
// Retorna o primeiro elemento que corresponde ao seletor CSS especificado.
// Útil quando você precisa selecionar apenas um elemento.
// Se nenhum elemento for encontrado, retorna null.

const primeiroParagrafo = document.querySelector('p');
console.log(primeiroParagrafo); // vai retornar o primeiro elemento a ser encontrado

// querySelectorAll:
// Retorna todos os elementos que correspondem ao seletor CSS especificado como uma NodeList.
// Útil quando você precisa selecionar vários elementos que correspondem ao mesmo seletor.
// Se nenhum elemento for encontrado, retorna uma NodeList vazia.

const todosParagrafos = document.querySelectorAll('p');
console.log(todosParagrafos); // retornará todos os paragrafos

todosParagrafos.forEach(paragrafo => {
    console.log(paragrafo.textContent);
});
// Saída:
// Parágrafo 1
// Parágrafo 2
// Parágrafo 3

// a NodeList retornada por querySelectorAll não é uma array, mas você pode iterar sobre ela usando métodos como forEach. Se precisar de uma array, você pode convertê-la usando Array.from ou Array.prototype.slice.call.