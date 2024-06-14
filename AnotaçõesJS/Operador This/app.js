// em JavaScript está diretamente relacionado ao contexto de execução da função em que é utilizado. Aqui estão algumas situações em que você pode usar o operador 

function aluno(nome,nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimo = function() {
        setTimeout(function(){
            console.log(this.nome); // aqui o this é diferente
            console.log(this.nota);
        },1000);
    }

    this.dados_arrow = function() {
        setTimeout(()=>{
            console.log(this.nome); // aqui o this é igual
            console.log(this.nota);
        },1000);
    }
}

const aluno1 = new aluno("Math",820);
aluno1.dados_anonimo(); // erro: pois o operador this não existe somente se usar uma arrow function
aluno1.dados_arrow(); // saída: correta!
