let nombre ="Sasha";
let apellido = "Cano";
let SueldoAct = 1550000;
let PorcentajeAumento = 25;
let CalculoAumento = ((SueldoAct * PorcentajeAumento)/100);
let NewSueldo = SueldoAct + CalculoAumento;


console.log ("Hola, estimado/a ") + nombre + apellido;
console.log ("En base a su sueldo actual de $") + SueldoAct;
console.log ("ha recibido un aumento del 25%:") + CalculoAumento;
console.log ("y su nuevo sueldo es de :$") + NewSueldo;