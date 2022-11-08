// unir dos listas .concat(lista2)
const lista1 = ["hola", 2, false, null];
const lista2 = ["adiós", 8, true, undefined];

console.log(lista1.concat(lista2));
console.log(lista1);

const lista3 = lista1.concat(lista2);
console.log(lista3);

console.log(...lista3);

const lista4 = [...lista1, ...lista2];
console.log(lista4);
