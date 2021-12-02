    
    
document.querySelector('#btn-verificar').addEventListener('click', ()=> {

    let numero = document.querySelector('#txt-num').value
    let resultado = numero % 2;
    

if ( resultado == 0){

    alert('Número par')
}

else {

    alert('Número ímpar')
}
})
