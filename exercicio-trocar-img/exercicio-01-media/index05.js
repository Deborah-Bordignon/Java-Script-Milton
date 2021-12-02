var botao = document.querySelector('#calcular')
botao.addEventListener('click', function(){

var a = parseInt(document.querySelector('#txt-01').value);
var b = parseInt( document.querySelector('#txt-02').value);

document.querySelector('#resultado-A').innerHTML ='A='+ b;
document.querySelector('#resultado-B').innerHTML ='B='+ a;



})

