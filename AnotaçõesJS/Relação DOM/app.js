const caixa1 = document.querySelector('#caixa1');
const cursos = [...document.querySelectorAll('.curso')];

// com as propriedades children vc pode pegar elementos filhos de um elemento pai. como visto abaixo:
console.log(caixa1.children);
console.log(caixa1.children[2]);
console.log(caixa1.children[caixa1.children.length-1]);
console.log(caixa1.firstElementChild);
console.log(caixa1.lastElementChild);
console.log(caixa1.hasChildNodes());
console.log(caixa1.childNodes.length > 0 ? "possui filhos" : "não possui filhos");

caixa1.firstElementChild.innerHTML = "teste";

// existem metodos para pegar os roots do elemento
console.log(document.getRootNode());

