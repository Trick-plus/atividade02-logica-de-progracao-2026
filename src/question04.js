import leia from 'readline-sync';


var dia = leia.questionInt(`Quantidade de diarias:`)
var idade = leia.questionInt(`Digite sua idade: `)
var valor;
if(dia >= 5){
 valor = dia*100
}else if( dia >=6 && dia <=10){
 valor = dia*90
}else{
 valor = dia*80
}

var valorF= valor;

if(idade >=60){
 var desconto=valor*0.20
    valorF= valor-desconto
}

console.log(`Valor a ser pago é de: R$${valorF.toFixed(2)}` )