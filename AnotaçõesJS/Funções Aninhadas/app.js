// Funçõs aninhadas são funçoes que estão dentro do escopo de outras funções

const soma=(...valores)=>{
    const somar=val=>{
        let res = 0;
        for(v of val){
            res+=v;
        }
        return res;
    }
    return somar(valores);
}

console.log(soma(10,15))
