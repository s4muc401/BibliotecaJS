const caixa1 = document.querySelector('#caixa1');
const cursos = [...document.querySelectorAll('.curso')];

// Em JavaScript, o método stopPropagation() é usado para impedir a propagação de um evento 
//através da hierarquia de elementos no DOM. Quando um evento ocorre em um elemento HTML, ele normalmente se propaga do elemento de origem para 
// os elementos pai (ancestrais) desse elemento. Isso é conhecido como "propagação de eventos".

caixa1.addEventListener('click',(evt)=>{
    console.log('clicou');
    console.log(evt.target);
});

cursos.map((el)=>{
    el.addEventListener('click',(evt)=>{
        evt.stopPropagation();
    });
});