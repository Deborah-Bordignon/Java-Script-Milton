document.querySelector('#btn-calc').addEventListener('click', function(){

    var macas = parseFloat(document.querySelector('#txtNumero01').value)
    var qntMaca = 0



    
    if (macas > 0 && macas < 12){

        qntMaca = macas * 1.30

    }

    else {

        qntMaca = macas * 1.00
    }

    // alert('Você comprou '+macas+' maçãs.'+'Pagando o valor de: R$ '+qntMaca )
    document.querySelector('#resultado').innerHTML = 'Você comprou '+macas+' maçãs.'+'Pagando o valor de: R$ '+qntMaca.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

})




// 1)	As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra. 