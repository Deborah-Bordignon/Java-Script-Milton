    
    
document.querySelector('#btn-verificar').addEventListener('click', ()=> {

    let numero = document.querySelector('#txt-num').value
    

if (numero >= 0){

    alert('Número positivo')
}

else {

    alert('Número negativo')
}
})
