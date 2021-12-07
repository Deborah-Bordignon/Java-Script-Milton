document.querySelector('#btn-mostrar').addEventListener('click', function(){

    var numero01 = parseInt( document.querySelector('#txt-01').value);
    var numero02 = parseInt( document.querySelector('#txt-02').value);
    var numero03 = parseInt( document.querySelector('#txt-03').value);
    
    
    if ( numero01 > numero02 && numero01 > numero03 ){
        if (numero02 > numero03 ){
            alert(numero01 + ' ' + numero02 + ' ' + numero03)
        }
        else{
            alert(numero01 + ' ' + numero03 + ' ' + numero02)
        }
    }
     
    if ( numero02 > numero01 && numero02 > numero03){
        if (numero01 > numero03 ){
            alert(numero02 + ' '+ numero01 +' '+ numero03)
        }
        else {
            alert(numero02 + ' '+ numero03 +' '+ numero01)
        }}
    
    if (numero03 > numero01 && numero03 > numero02){
        if (numero01 > numero02){
    
            alert(numero03 + ' '+ numero01 +' '+ numero02)
        }
        else{
            alert(numero03 + ' '+ numero02 +' '+ numero01)
        }
    }
    
    })
    
    
    
    
    
    
    