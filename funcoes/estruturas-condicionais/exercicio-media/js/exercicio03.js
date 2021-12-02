var botao = document.querySelector('#calcular')
botao.addEventListener('click', function(){

var nome = document.querySelector('#txtNome').value;
var n1 = parseInt( document.querySelector('#txtNota01').value);
var n2 = parseInt( document.querySelector('#txtNota02').value);

var media = (n1+n2)/2; 

if (media>=6){

    var final = 'Aprovado, Parabéns !!!' 
}

else {

    var final = 'Reprovado. Estude mais !'
}


// document.querySelector('#result-nome').innerHTML = 'Aluno(a) : '+ nome;
document.querySelector('#resultado').innerHTML = ' O aluno ' + nome +' Obteve a média : ' + media + ' e foi ' + final;


})



