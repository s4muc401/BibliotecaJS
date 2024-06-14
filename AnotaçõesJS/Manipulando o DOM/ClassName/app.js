// o metdo getElementsByClassName permite que usamos os elementos html que estejam em uma classe especifica
const cursosTipo1=[...document.getElementsByClassName('cursosTipo1')];
const cursosTipo2=[...document.getElementsByClassName('cursosTipo2')];
const todosCursos=[...document.getElementsByClassName('cursosTipos1','cursosTipo2')];

console.log(cursosTipo1);
console.log(cursosTipo2);
console.log(todosCursos);