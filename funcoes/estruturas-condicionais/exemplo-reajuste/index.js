document.querySelector('#btn-verificar').addEventListener('click',function(){

    let salario = parseInt(document.querySelector('#txt-salario').value)
    let novoSalario = 0;

    if (salario < 500){

        novoSalario = salario * 1.15;

    }

    else if (salario >= 500 && salario <=100){

       novoSalario = salario * 1.10; 

    }

    else {

        novoSalario = salario * 1.05;
    }

    alert('Salário reajustado: ' + novoSalario)





















})
    // let salario = parseInt(document.querySelector("txt-salario").value); 
    // let novoSalario = 0 

    // if (salario < 500 ){

    //     novoSalario = (salario * 0.15) +  salario 

    // }

    // else if (salario > 1000){

    //     novoSalario = salario * 1.05

    // }

    // else {

    //     novoSalario = salario * 1.10
    // }

    // alert('Salário reajustado: '+novoSalario)



// else if (salario >= 500 && salario <= 1000)