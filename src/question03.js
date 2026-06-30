import leia from 'readline-sync';


var Gol = leia.questionInt(`quantidade de gols: `)
var  Pc = leia.questionInt(`passes certos: `)
var  Pe = leia.questionInt(`passes errados: `)
var pontos = (Gol * 50) + (Pc * 10) + (Pe * -5)
console.log(`O jogador possui ${pontos} pontos.`)
if (pontos< 50){
    console.log(`Péssima partida.`)
}else if (pontos>=50 && pontos<100){
    console.log(`Partida ruim.`)
}else if (pontos>=100 && pontos<150){
    console.log(`Fez o básico.`)
}else if (pontos >=150 && pontos<=200 ){
    console.log(`Foi bem na partida.`)
}else{
    console.log(`Jogou demais.`)
}
