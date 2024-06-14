// como o seletor getElementsByTagName tu pode pegar varios elementos da mesma tag

const colecaoHTML=document.getElementsByTagName('div');
console.log(colecaoHTML);

// com o getElementsByTagName tu tem menos possibilidades de uso pois ele não é classificado como um array

// transformando os elementos do getElementsByTagName em array
const arrayColecaoHTML=[...document.getElementsByTagName('div')];
console.log(arrayColecaoHTML);

// agora sim tu pode usar getElementsByTagName como array