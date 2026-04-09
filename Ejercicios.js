"use strict";

/*1. Duplicar números con map
map se usa para transformar cada elemento del arreglo*/
const numeros1 = [2, 4, 6, 8, 10];
const resultado1 = numeros1.map(n => n * 2);
console.log(resultado1); // [4, 8, 12, 16, 20]


/*2. Convertir nombres a mayúsculas con map
map transforma cada texto*/
const nombres2 = ["ana", "luis", "maria", "jorge"];
const resultado2 = nombres2.map(n => n.toUpperCase());
console.log(resultado2);


/*3. Obtener longitudes de palabras con map
map devuelve el tamaño de cada palabra*/
const palabras3 = ["sol", "computador", "mesa", "javascript"];
const resultado3 = palabras3.map(p => p.length);
console.log(resultado3); // [3, 10, 4, 10]


/*4. Filtrar números pares con filter
filter selecciona los que cumplen condición*/
const numeros4 = [1,2,3,4,5,6,7,8,9,10];
const resultado4 = numeros4.filter(n => n % 2 === 0);
console.log(resultado4);


/*5. Filtrar palabras largas con filter*/
const palabras5 = ["casa", "ventana", "sol", "computadora", "luz"];
const resultado5 = palabras5.filter(p => p.length > 5);
console.log(resultado5);


/*6. Filtrar estudiantes aprobados*/
const estudiantes6 = [
 { nombre: "Ana", nota: 4.5 },
 { nombre: "Luis", nota: 2.8 },
 { nombre: "Marta", nota: 3.7 },
 { nombre: "Carlos", nota: 2.5 }
];

const resultado6 = estudiantes6.filter(e => e.nota >= 3.0);
console.log(resultado6);


/*7. Sumar números con reduce
reduce acumula valores*/
const numeros7 = [5, 10, 15, 20];
const resultado7 = numeros7.reduce((acc, n) => acc + n, 0);
console.log(resultado7); // 50


/*8. Multiplicar números con reduce*/
const numeros8 = [2, 3, 4];
const resultado8 = numeros8.reduce((acc, n) => acc * n, 1);
console.log(resultado8); // 24


/*9. Contar letras con reduce*/
const palabras9 = ["hola", "mundo", "js"];
const resultado9 = palabras9.reduce((acc, p) => acc + p.length, 0);
console.log(resultado9);


/*10. Ordenar números ascendentemente*/
const numeros10 = [45, 12, 78, 3, 19, 1];
const resultado10 = numeros10.slice().sort((a, b) => a - b);
console.log(resultado10);


/*11. Ordenar números descendentemente*/
const resultado11 = numeros10.slice().sort((a, b) => b - a);
console.log(resultado11);


/*12. Ordenar nombres alfabéticamente*/
const nombres12 = ["Pedro", "Ana", "Luis", "Carlos", "Marta"];
const resultado12 = nombres12.slice().sort();
console.log(resultado12);


/*13. Ordenar productos por precio*/
const productos13 = [
 { nombre: "Teclado", precio: 120000 },
 { nombre: "Mouse", precio: 50000 },
 { nombre: "Monitor", precio: 800000 },
 { nombre: "USB", precio: 30000 }
];

const resultado13 = productos13.slice().sort((a, b) => a.precio - b.precio);
console.log(resultado13);


/*14. Día de la semana con switch*/
const dia = 3;

switch(dia){
 case 1: console.log("Lunes"); break;
 case 2: console.log("Martes"); break;
 case 3: console.log("Miércoles"); break;
 case 4: console.log("Jueves"); break;
 case 5: console.log("Viernes"); break;
 case 6: console.log("Sábado"); break;
 case 7: console.log("Domingo"); break;
 default: console.log("Día no válido");
}


/*15. Clasificación de color*/
const color = "rojo";

switch(color){
 case "rojo": console.log("Color de alerta"); break;
 case "verde": console.log("Color de avance"); break;
 case "amarillo": console.log("Color de precaución"); break;
 default: console.log("Color no reconocido");
}


/*16. Tabla del 5 con while*/
let i = 1;

while(i <= 10){
 console.log(`5 x ${i} = ${5 * i}`);
 i++;
}


/*17. Cuenta regresiva*/
let j = 10;

while(j >= 1){
 console.log(j);
 j--;
}

console.log("¡Despegue!");


/*18. Sumar hasta 100*/
let suma = 0;
let num = 1;
let contador = 0;

while(suma < 100){
 console.log(num);
 suma += num;
 num++;
 contador++;
}

console.log("Suma final:", suma);
console.log("Cantidad:", contador);


/*19. filter + map*/
const numeros19 = [3, 8, 15, 20, 7, 12, 1, 30];

const resultado19 = numeros19
 .filter(n => n > 10)
 .map(n => n * 2);

console.log(resultado19);


/*20. Integrador*/
const ventas = [
 { producto: "Mouse", cantidad: 3, precio: 50000 },
 { producto: "Teclado", cantidad: 2, precio: 120000 },
 { producto: "Monitor", cantidad: 1, precio: 800000 },
 { producto: "USB", cantidad: 5, precio: 30000 }
];

// Filtrar
const paso1 = ventas.filter(v => v.cantidad >= 2);

// Ordenar
const paso2 = paso1.sort((a, b) => b.precio - a.precio);

// Map
const paso3 = paso2.map(v => v.producto + " - Total: " + (v.cantidad * v.precio));
console.log(paso3);

// Reduce
const total = ventas.reduce((acc, v) => acc + (v.cantidad * v.precio), 0);
console.log("Total ventas:", total);
