/* let num =[1, 2, 3, 4]
num[4] = 5
num.push(6)
console.log(num.length)
*/

let valor = [1, 2, 3, 4, 5]

 //for(let pos=0; pos < valor.length; pos++){
 //  console.log(valor[pos])
//}

let soma = 0;
let contador = 0;
let numero;

numero = 5

while (numero !== 0) {
    soma += numero;
    contador++;
    numero--;
}

console.log(`Quantidade: ${contador}`);
console.log(`Soma total: ${soma}`);
