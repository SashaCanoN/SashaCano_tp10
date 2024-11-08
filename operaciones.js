let num1 = parseInt(16);
let nume2 = parseInt(35);

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicacion = num1 * num2;
const division = num1 / num2;
const modulo = num1 % num2;

console.log("suma: " + suma);
console.log("resta: " + resta);
console.log("multiplicación: " + multiplicacion);
console.log("división: " + division);
console.log("módulo: " + modulo);

function mayor(num1, num2){
  if(num1 > num2){
   console.log("El Número 1 es mayor: " + true);
  }else{
    console.log("El Número 1 es mayor: " + false);
  }
}

function menor(num1, num2){
  if(num1 < num2){
   console.log("El Número 1 es menor: " + true);
  }else{
    console.log("El Número 1 es menor: " + false);
  }
}

mayor(num1, num2);
menor(num1, num2);