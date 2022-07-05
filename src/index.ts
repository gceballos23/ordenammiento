let tamanoArreglo: number = 0;
tamanoArreglo = Number(
  prompt("Indique  cantidad  de persoNAS a cargar Vector : ")
);

let nombre: string[] = new Array(tamanoArreglo);
let anio: number[] = new Array(tamanoArreglo);
let altura: number[] = new Array(tamanoArreglo);

function getRndInteger(min, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarVectorManual(v: string[]) {
  for (let indice = 0; indice < v.length; indice++) {
    v[indice] = prompt("Ingrese el Nombre de la posicion ", indice, ":");
  }
}

function cargarVector(v: number[], min: number, max: number) {
  let indice: number;
  for (indice = 0; indice < v.length; indice++) {
    v[indice] = getRndInteger(min, max);
  }
}

cargarVectorManual(nombre);
cargarVector(anio, 1981, 2000);
cargarVector(altura, 156, 200);

function intercambiar(arreglo: number[], i: number, j: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = arreglo[i];
}

function intercambiarStr(arreglo: string[], i: number, j: number) {
  let aux: string;
  aux = arreglo[i];
  arreglo[i] = arreglo[j];
  arreglo[j] = arreglo[i];
}

function comparar(arreglo: number[], i: number, j: number): number {
  let comparacion: number;
  if (arreglo[i] === arreglo[j]) {
    comparacion = 0;
  } else if (arreglo[i] < arreglo[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}

function burbujaAnio(arreglo: number[], cantidad: number) {
  // Algoritmo de burbujaa
  for (let i: number = 0; i < cantidad - 1; i++) {
    for (let j: number = 0; j < cantidad - 1 - i; j++) {
      if (arreglo[j] > arreglo[j + 1]) {
        intercambiar(arreglo, j, j + 1);
        intercambiar(altura, j, j + 1);
        intercambiarStr(nombre, j, j + 1);
      }
    }
  }
}

function burbuja(
  arreglo: number[],
  cantidad: number,
  posicionI: number,
  posicionJ: number,
  anio: number
) {
  // Algoritmo de burbujaa
  for (let i: number = posicionI; i < cantidad - 1; i++) {
    for (let j: number = posicionJ; j < cantidad - 1 - i; j++) {
      if (arreglo[j] > arreglo[j + 1]) {
        intercambiar(arreglo, j, j + 1);
        intercambiar(anio, j, j + 1);
        intercambiarStr(nombre, j, j + 1);
      }
    }
  }
}
