var botao = document.querySelector('#calcular')
botao.addEventListener('click', function(){

var nome = document.querySelector('#txtNome').value;
var n1 = parseInt( document.querySelector('#txtNota01').value);
var n2 = parseInt( document.querySelector('#txtNota02').value);

var media = (n1+n2)/2; 

document.querySelector('#result-nome').innerHTML = 'Aluno(a) : '+ nome;
document.querySelector('#resultado').innerHTML = 'Obteve a média : ' + media;


})

