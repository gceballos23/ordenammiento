console.clear;

let tamanoArreglo: number = 0;
tamanoArreglo = Number(
  prompt("Indique  cantidad  de personas a cargar Vector : ")
);

let nombre: string[] = new Array(tamanoArreglo);
let anio: number[] = new Array(tamanoArreglo);
let altura: number[] = new Array(tamanoArreglo);

function getRndInteger(min, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarVectorManualStr(v: string[], texto: string) {
  for (let indice = 0; indice < v.length; indice++) {
    v[indice] = prompt("Ingrese el ", texto);
  }
}

function cargarVectorManualInt(v: number[], texto: string) {
  for (let indice = 0; indice < v.length; indice++) {
    v[indice] = prompt("Ingrese el ", texto);
  }
}

function cargarVector(v: number[], min: number, max: number) {
  let indice: number;
  for (indice = 0; indice < v.length; indice++) {
    v[indice] = getRndInteger(min, max);
  }
}

cargarVectorManualStr(nombre, "Nombre");
cargarVectorManualInt(anio, "Edad");
cargarVectorManualInt(altura, "Altura");

function intercambiar(arreglo: number[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}

function intercambiarStr(arreglo: string[], i: number, j: number) {
  let aux: string;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = aux;
}

function compararUnArray(arreglo: number[], i: number, j: number): number {
  let comparacion: number;
  if (arreglo[i] == arreglo[j]) {
    comparacion = 0;
  } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

function comparar(edad: number[], altura: number[], i: number, j: number) {
  let comparacion: number;
  if (edad[i] == edad[j]) {
    comparacion = compararUnArray(altura, i, j);
  } else if (edad[i] < edad[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

function ordenarBurbuja(
  edad: number[],
  altura: number[],
  nombre: string[],
  cantidad: number
) {
  // Algoritmo de burbujaa
  for (let i: number = 0; i < cantidad - 1; i++) {
    for (let j: number = 0; j < cantidad - 1 - i; j++) {
      if (comparar(edad, altura, j, j + 1) == 1) {
        intercambiar(edad, j, j + 1);
        intercambiar(altura, j, j + 1);
        intercambiarStr(nombre, j, j + 1);
      }
    }
  }
}

console.log("DATOS CARGADOS");
console.log(nombre);
console.log(anio);
console.log(altura);
console.log("DATOS ORDENADOS");
ordenarBurbuja(anio, altura, nombre, tamanoArreglo);
console.log(nombre);
console.log(anio);
console.log(altura);
