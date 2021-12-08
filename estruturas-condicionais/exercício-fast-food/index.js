document.querySelector('#btn-mostrar').addEventListener('click',function(){


    let menu = parseInt(document.querySelector('#txt-cd').value)
    let quantidade = parseInt(document.querySelector('#txt-qnt').value)



    switch(menu){

        case 1 : 
            var produto = 'Sanduiche de Presunto'
            var resultado = quantidade * 2.30
            break

        case 2:
            var produto = 'Suco de Tamarindo'
            var resultado = quantidade * 1.50
            break

        case 3 :
            var produto = 'Pastel de Vento'
            var resultado = quantidade * 1.30
            break
        
        case 4 : 
            var produto ='Pão com margarina'
            var resultado = quantidade * 0.70
            break
            
        default : 
        
            alert('Escolha uma das opções')
            break
        
    }

    document.querySelector('#resultado').innerHTML = ('Você escolheu '+quantidade+' quantidades do produto: '+produto+ '. Pagando o total de: '+resultado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))

})