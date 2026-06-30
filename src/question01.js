import leia from 'readline-sync';

var n1 = leia.questionFloat('Digite um numero:') // 2
var n2 = leia.questionFloat('Digite um numero:') // 1
var n3 = leia.questionFloat('Digite um numero:') // 3
var aux;

if(n1 >n2 ){
    aux = n1;
    n1  = n2;
    n2 = aux;
}

if(n1 >n3){
    aux = n1;
    n1  = n3;
    n3 = aux;
}

if(n2 > n3){
    aux = n2;
    n2  = n3;
    n3 = aux;
}

console.log(n1 , n2 , n3)
