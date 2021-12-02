var botao = document.querySelector('#calcular')
botao.addEventListener('click', function(){

var c = document.querySelector('#txt-comprimento').value;
var a = parseInt( document.querySelector('#txt-altura').value);
var l= parseInt( document.querySelector('#txt-largura').value);

var volume = c * a * l ; 

document.querySelector('#resultado').innerHTML = 'O volume é : ' + volume;


})

var botao = document.querySelector('#calcular')
botao.addEventListener('click', function(){

var base = document.querySelector('#txt-base').value;
var altura = parseInt( document.querySelector('#txt-altura').value);


var area = base * altura ; 

document.querySelector('#resultado').innerHTML = 'A área é : ' + area;


})

