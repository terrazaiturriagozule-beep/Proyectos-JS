"use strict";

// =======================
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ======================
const productos = [
  { id: 1, nombre: "Mouse", categoria: "Periférico", precio: 50000, stock: 10, ventas: 12 },
  { id: 2, nombre: "Teclado", categoria: "Periférico", precio: 120000, stock: 5, ventas: 7 },
  { id: 3, nombre: "Monitor", categoria: "Pantalla", precio: 800000, stock: 2, ventas: 4 },
  { id: 4, nombre: "USB", categoria: "Accesorio", precio: 30000, stock: 0, ventas: 15 },
  { id: 5, nombre: "Diadema", categoria: "Audio", precio: 90000, stock: 8, ventas: 6 }
];

// =======================
// FUNCIONES
// =======================

function mostrarProductos() {
  if (productos.length === 0) return console.log("Sin productos");
  console.log("\n--- PRODUCTOS ---");
  productos.forEach(p =>
    console.log(`${p.id} | ${p.nombre} | $${p.precio} | Stock:${p.stock} | Ventas:${p.ventas}`)
  );
}

function stockBajo() {
  const lista = productos.filter(p => p.stock < 5 && p.stock > 0);
  console.log("\n--- STOCK BAJO ---");
  if (lista.length === 0) return console.log("Ninguno");
  lista.forEach(p => console.log(p.nombre));
}

function agotados() {
  const lista = productos.filter(p => p.stock === 0);
  console.log("\n--- AGOTADOS ---");
  if (lista.length === 0) return console.log("Ninguno");
  lista.forEach(p => console.log(p.nombre));
}

function listaPrecios() {
  console.log("\n--- PRECIOS ---");
  console.log(productos.map(p => `${p.nombre} - $${p.precio}`));
}

function valorInventario() {
  const total = productos.reduce((acc, p) => acc + (p.precio * p.stock), 0);
  console.log("\nInventario:", total);
}

function totalVentas() {
  const total = productos.reduce((acc, p) => acc + p.ventas, 0);
  console.log("\nVentas:", total);
}

function ordenarPrecio() {
  const lista = [...productos].sort((a, b) => b.precio - a.precio);
  console.log("\n--- POR PRECIO ---");
  lista.forEach(p => console.log(p.nombre, p.precio));
}

function ordenarVentas() {
  const lista = [...productos].sort((a, b) => b.ventas - a.ventas);
  console.log("\n--- POR VENTAS ---");
  lista.forEach(p => console.log(p.nombre, p.ventas));
}

function buscar(nombre) {
  const p = productos.find(x => x.nombre.toLowerCase() === nombre.toLowerCase());
  console.log(p ? p : "No encontrado");
}

function validaciones() {
  console.log("¿Hay agotados?", productos.some(p => p.stock === 0));
  console.log("¿Todos con stock?", productos.every(p => p.stock > 0));
}

function clasificar(precio) {
  let tipo;

  switch (true) {
    case precio < 50000: tipo = "Económico"; break;
    case precio <= 150000: tipo = "Medio"; break;
    case precio <= 500000: tipo = "Alto"; break;
    default: tipo = "Premium";
  }

  console.log("Clasificación:", tipo);
}

function combinaciones() {
  console.log("\n--- DISPONIBLES ORDENADOS ---");
  productos
    .filter(p => p.stock > 0)
    .sort((a, b) => a.precio - b.precio)
    .forEach(p => console.log(p.nombre));

  console.log("\n--- REABASTECER ---");
  console.log(
    productos
      .filter(p => p.stock === 0)
      .map(p => `Reabastecer: ${p.nombre}`)
  );
}

function reporte() {
  const caro = [...productos].sort((a, b) => b.precio - a.precio)[0];
  const barato = [...productos].sort((a, b) => a.precio - b.precio)[0];
  const vendido = [...productos].sort((a, b) => b.ventas - a.ventas)[0];

  const inventario = productos.reduce((a, p) => a + p.precio * p.stock, 0);
  const ventas = productos.reduce((a, p) => a + p.ventas, 0);
  const agotados = productos.filter(p => p.stock === 0).length;

  console.log("\n--- REPORTE ---");
  console.log("Más caro:", caro.nombre);
  console.log("Más barato:", barato.nombre);
  console.log("Más vendido:", vendido.nombre);
  console.log("Inventario:", inventario);
  console.log("Ventas:", ventas);
  console.log("Agotados:", agotados);
}

// =======================
// MENÚ
// =======================

function menu() {
  console.log(`
1. Ver productos
2. Stock bajo
3. Agotados
4. Precios
5. Inventario
6. Ventas
7. Orden precio
8. Orden ventas
9. Buscar
10. Validaciones
11. Clasificar precio
12. Combinaciones
13. Reporte
14. Salir
`);

  rl.question("Opción: ", op => {

    switch (op) {
      case "1": mostrarProductos(); break;
      case "2": stockBajo(); break;
      case "3": agotados(); break;
      case "4": listaPrecios(); break;
      case "5": valorInventario(); break;
      case "6": totalVentas(); break;
      case "7": ordenarPrecio(); break;
      case "8": ordenarVentas(); break;

      case "9":
        rl.question("Nombre: ", n => {
          buscar(n);
          menu();
        });
        return;

      case "10": validaciones(); break;

      case "11":
        rl.question("Precio: ", p => {
          clasificar(parseFloat(p));
          menu();
        });
        return;

      case "12": combinaciones(); break;
      case "13": reporte(); break;

      case "14":
        rl.close();
        return;

      default:
        console.log("Inválido");
    }

    menu();
  });
}

menu();