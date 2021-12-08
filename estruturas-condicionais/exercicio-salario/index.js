document.querySelector('#btn-calc').addEventListener('click',function(){


    let nome= document.querySelector('#txt-nome').value
    let valorHora= parseFloat(document.querySelector('#txt-hora').value)
    let total = parseFloat(document.querySelector('#txt-total').value)
    let novovalor =document.querySelector('#txt-transporte').value

    var bruto = valorHora * total
    var transporte = 0
    var imposto = 0
    var liquido = 0


    if (novovalor.toUpperCase() == 'Sim'.toUpperCase()){

        transporte = (bruto * 6) / 100

    }

     if (bruto > 1440.00){

        imposto = (bruto * 11) /100
    }
    

    liquido = bruto - transporte - imposto

    document.querySelector('#resultado').innerHTML = ' o funcionário ' + nome + ' recebe de salario liquido : ' +liquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    

})

// (total * porcentagem) /100 