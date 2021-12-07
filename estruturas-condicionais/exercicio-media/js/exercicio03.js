var botao = document.querySelector('#calcular')
botao.addEventListener('click', function(){

var nome = document.querySelector('#txtNome').value;
var n1 = parseInt( document.querySelector('#txtNota01').value);
var n2 = parseInt( document.querySelector('#txtNota02').value);

var media = (n1+n2)/2; 

if (media>=7){

    var final = 'Aprovado, Parabéns !!!' 
}
else if (media < 7 && media>=5){

    var final = 'Aluno de recuperação '

}

else {

    var final = 'Reprovado. Estude mais !'
}


// document.querySelector('#result-nome').innerHTML = 'Aluno(a) : '+ nome;
document.querySelector('#resultado').innerHTML = ' O aluno ' + nome +' Obteve a média : ' + media + ' e foi ' + final;


})



