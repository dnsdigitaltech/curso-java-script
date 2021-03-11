/******************** Operadores Aritméticos ****************** */
/*var n1 = 12
var n2 = 4

//soma
 console.log(n1 + n2 + 4)

//subtração
console.log(n1 - n2)

//multiplicação
console.log(n1 * n2)

//divisão
console.log(n1 / n2)

//potencia
console.log(n1 ** n2)*/

/******************** Operadores Aritméticos Ordem de Prioridades  ****************** */
/*console.log(2 + 4 - 3) //3
console.log(4 - 3 + 2) //3
console.log(4 - 3 + 2 * 2) //5
console.log((4 - 3 + 2) * 2) //6
console.log(4 - 3 + 2 / 2) //2
console.log((6 - 2 + 2) / 2) //3
console.log((6 - 2 + 2) / 2 + 2 * 3) //9
console.log(((6 - 2 + 2) / 2 + 2) * 3) //15*/


/******************** Operadores Aritméticos Incremento e Decremento  ****************** */
/*console.log(n1++)//12
console.log(n1)//13
console.log(++n1)//14

console.log(n1--)//14
console.log(n1)//13
console.log(--n1)//12*/

/******************** Operadores Aritméticos Resto da Divisão  ****************** */
//muito usado para saber de o numero e impar ou par
/*n3 = 13
console.log(n1 % 2) //0
console.log(n3 % 2) //1*/

/******************** Operadores de Atribuição  ****************** */
//=
/*var n1 = 12
var n2 = n1
var result = n1 + 1
console.log(result)//13
n1 = n1 + 1
console.log(n1)//13

//+=
n2 += 1
console.log(n2)//13

//-=
n2 -= 7
console.log(n2)//6

//*=
n2 *= 2
console.log(n2)//6

// /=
n2 /= 3
console.log(n2)//4*/

/******************** Operadores de Comparação  ****************** */
//== igual a
/*console.log(2 == 2)//true
console.log(2 == 3)//false
console.log('Davi' == 'Davi')//true
console.log('Davi' == 'davi')//false

console.log(2 == '2')//true //compara valor
console.log(2 === '2')//false //alem de comparar valor, compara seu tipo

//!= diferente de
console.log(2 != 3)//false
console.log(2 != 3)//true
console.log(2 != '3')//true
console.log(2 !== '2')//true
console.log(2 !== 2)//false

//> maior que
console.log(2 > 3)//false
console.log(3 > 2)//true

//> menor que
console.log(2 < 3)//true
console.log(3 < 2)//false

//>= maior que
console.log(3 > 3)//false
console.log(3 >= 3)//true
console.log(3 >= 5)//false
console.log(5 >= 3)//false

//<= menor que
console.log(2 < 2)//false
console.log(2 <= 2)//true
console.log(2 <= 4)//true
console.log(4 <= 2)//false*/

/******************** Operadores Lógicos  ****************** */
//Operadores lógicos são muito combinados com os operadores de comparação
//Exemplo se quiser comparar mais de uma coisa, utiliza os operado lógico para combinar esta comparação
var n1 = 12;

console.log(n1 == 12) //true
console.log(typeof n1 == 'number') //true //retorna o tipo da variável neste caso é number
console.log(typeof n1 == 'string') //false 
//Operador && compara se os dois valores são verdadeiros
console.log(typeof n1 == 'number' && n1 == 12) //true 
console.log(typeof n1 == 'number' && n1 == 13) //false 
console.log(typeof n1 == 'string' && n1 == 12) //false 
console.log(typeof n1 == 'string' && n1 == 13) //false 
//Operador || compara se um dos valores são verdadeiros
console.log(typeof n1 == 'number' || n1 == 12) //true 
console.log(typeof n1 == 'number' || n1 == 13) //true 
console.log(typeof n1 == 'string' || n1 == 12) //true 
console.log(typeof n1 == 'string' || n1 == 13) //false 
//Operador ! nega a variavel se !true retorna false, se !false retona true
console.log(!true) //false 
console.log(!false) //true 