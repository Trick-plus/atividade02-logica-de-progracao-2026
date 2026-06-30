import leia, { keyInSelect } from 'readline-sync';

switch (keyInSelect(['Celsius para Fahrenheit', 'Fahrenheit para Celsius', 'Celsius para Kelvin','Kelvin para Celsius',' Fahrenheit para Kelvin','Kelvin para Fahrenheit'], 'Escolha um para  fazer a conversao:')) {
    case 0:
        var C = leia.questionFloat(`Digite a temperatura em Celsius: `)  
        console.log(`A temperatura em Fahrenheit é de: ${ ((C * 1.8) + 32).toFixed(2)}`)
        break;
    case 1:
        var F = leia.questionFloat(`Digite a temperatura em Fahrenheit: `)  
        console.log(`A temperatura em Fahrenheit é de Celsius: ${((F - 32) * (5/9)).toFixed(2)}`)
        break;  
    case 2:
        var C = leia.questionFloat(`Digite a temperatura em Celsius: `)  
        console.log(` A temperatura em Kelvin é de: ${(C + 273.15).toFixed(2)}`)
        break;  
    case 3: 
        var K = leia.questionFloat(`Digite a temperatura em Kelvin: `)  
        console.log(` A temperatura em Celsius é de: ${(K - 273.15).toFixed(2)}`)
        break; 
    case 4:
        var F = leia.questionFloat(`Digite a temperatura em Fahrenheit: `)
        console.log(` A temperatura em Kelvin é de: ${((F - 32) * (5/9) + 273.15).toFixed(2)}`)
        break; 
    case 5:
        var K = leia.questionFloat(`Digite a temperatura em Kelvin: `)
        console.log(` A temperatura em Fahrenheit é de: ${((K - 273.15) * 1.8 + 32).toFixed(2)}`)
        break;
}
   
