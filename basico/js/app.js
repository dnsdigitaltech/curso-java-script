// ************ Primeiro programa *********************
//alert('Olá mundo!');//exibe alerta no navegador
//console.log('Olá mundo!');//exibe o conteudo no console F12, usado para debugs

// ************ Comentários *********************
//comentário 1 linha

/*comentário multiplas linhas
  comentário em bloco*/

// ************ Variáveis *********************
//Variaveis guarda em memória dados que durande o processo vai mudando de valores
/*var davi = 'Davi Bernardo'; //aparece n vezes no meu console
console.log(davi); //string

//podendo ser mudado o valor
davi = true; //Boolean
console.log(davi);

davi = 19999; //int
console.log(davi);

davi = 3.14; //float
console.log(davi);*/

// ************ Concatenação *********************
//concatenção dever para juntar variáveis

//var name = 'Davi';
var name = prompt('O seu nome?');//pede um nome do usuário e coloca em variavel
var age = prompt('A sua idade?');
//var age = '37';
var ageTwo = '40'; 

console.log('O ' + name + ' tem ' + age + ' anos');//concatenou
console.log(age + ageTwo); //neste caso soma
console.log(age +' '+ ageTwo); //concatena numeros