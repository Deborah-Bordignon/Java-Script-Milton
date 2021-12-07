document.querySelector('#btn-mostrar').addEventListener('click', function(){

    var numero01 = parseFloat( document.querySelector('#txt-01').value);
    var numero02 = parseFloat( document.querySelector('#txt-02').value);
    var numero03 = parseFloat( document.querySelector('#txt-03').value);

    // se numero01 + numero02 > numero 03
    //se numero02 + numero03 > numero01
    //numero01 + numero03 > numero02

    if ((numero01+numero02)> numero03 && (numero02+numero03) > numero01 && (numero01+numero03) > numero02)
    
    {

        alert('A soma dos valores digitados Formam um triângulo')
    
                if (numero01 == numero02 && numero01==numero03) {
                    alert('A soma dos valores formou um triângulo Equilátero ( três lados iguais)')
                } 
        
                else if (numero01 == numero02 || numero01 == numero03){
                alert('A soma dos valores formou um triângulo Isósceles ( quaisquer dois lados iguais)')
        
                }
                 else {
                        alert('A soma dos valores formou um triângulo Escaleno ( três lados diferentes)')
                    }
       }

       else
        {
           alert('Esses valores não formam um triângulo')
       }

             
})