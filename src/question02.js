import leia from 'readline-sync';

var n1 = leia.questionFloat('Digite a nota de 0 a 10:')
var notaMa = n1;
var notaMe = n1;

var n2 = leia.questionFloat('Digite a nota de 0 a 10:')
notaMa = (n2> notaMa)? n2 : notaMa;
notaMe = (n2 < notaMe) ? n2 : notaMe;

var n3 = leia.questionFloat('Digite a nota de 0 a 10:')
notaMa = (n3> notaMa)? n3 : notaMa;
notaMe = (n3< notaMe) ? n3 : notaMe;

var n4 = leia.questionFloat('Digite a nota de 0 a 10:')
notaMa = (n4> notaMa)? n4 : notaMa;
notaMe = (n4< notaMe) ? n4 : notaMe;

var n5 = leia.questionFloat('Digite a nota de 0 a 10:')
notaMa = (n5> notaMa)? n5 : notaMa;
notaMe = (n5 < notaMe) ? n5 : notaMe;

var n6 = leia.questionFloat('Digite a nota de 0 a 10:')
notaMa = (n6> notaMa)? n6 : notaMa;
notaMe = (n6 < notaMe) ? n6 : notaMe;

var soma = (n1+n2+n3+n4+n5+n6) - (notaMa + notaMe);
var media = soma/4;
console.log('A media deste aluno é:'+ media)