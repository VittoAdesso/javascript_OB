let var1 = { id: false }
let array = [1, "hola", false, { id: 5 }, null, undefined, var1]

console.log(array);

console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);

array.push("final", 45, 100, false)
console.log(array);

array.unshift("inicio", 87, 99)
console.log(array);

const array2 = [1, 3, "hola", false]

array2.pop();
console.log(array2);

array2.shift();
console.log(array2);

const array3 = [1, 2, 3, 4, 5, 6];

array3.splice(2, 1);
console.log(array3);

array3.splice(2, 0, "hola");
console.log(array3);

array3.splice(2, 1, 3);
console.log(array3);