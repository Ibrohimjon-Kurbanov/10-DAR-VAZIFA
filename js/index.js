// SODAROQ MASALALAR

// LENGTH

// 1-MASALA

// let arr = ["Hello", "BMW", false, 5, "Prime"].length;
// console.log(arr);

// 2-MASALA

// let str = "Hello world".length;
// console.log(str);

// 3-MASALA

// let arr = ["Hello", "BMW", false, 5, "Prime"];
// lastArrValue = arr[arr.length - 1];
// console.log(lastArrValue);

//  CONCAT

// 1-MASALA

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let res = arr1.concat(arr2);

// console.log(res);

// 2-MASALA

// let str1 = "Hello,";
// let str2 = "What's";
// let str3 = "up";

// let res = str1.concat(" ", str2, " ", str3);

// console.log(res);

// 3-MASALA

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let res = arr1.concat(arr2);
// res.push("Prime");
// console.log(res);

// INCLUDES

// 1-MASALA

// let arr = ["Hello", "BMW", false, 5, "Prime"];
// str = "BMW";
// let res = arr.includes(str);
// console.log(res);

// 2-MASALA

// let arr = ["Hello", "BMW", false, 5, "Prime", "Warrior"];

// str = "Warrior";

// if (arr.includes(str)) {
//   console.log("Mavjud");
// } else {
//   console.log("Mavjud emas");
// }

// 3-MASALA

// let arr = [1, 7, 3, 8, 5, 23];
// let isExist = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     isExist = true;
//     break;
//   }
// }

// if (isExist) {
//   console.log("Mavjud");
// } else {
//   console.log("Mavjud emas");
// }

//   IndexOf, LastIndexOf

// 1-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
// let value = arr.indexOf(7);
// console.log(value);

// 2-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
// let value = arr.lastIndexOf(7);
// console.log(value);

// 3-MASALA

// let arr = ["b", "a", "c", "d", "a", "e"];

// let value1 = arr.indexOf("a");
// let value2 = arr.lastIndexOf("a");

// console.log(value1 + "\n" + value2);

// SORT
// 1-MASALA

// let numbers = [3, 5, 7, 2, 4, 1, 6];

// let res = numbers.sort(function (a, b) {
//   return a - b;
// });

// console.log(res);

// 2-MASALA

// let fruits = ["olma", "anor", "shaftoli", "banan"];

// fruits.sort();

// console.log(fruits);

// 3-MASALA
// let numbers = [3, 5, 7, 2, 4, 1, 6];

// let res = numbers.sort(function (a, b) {
//   return b - a;
// });

// console.log(res);

// REVERSE

// 1-MASALA

// let numbers = [3, 5, 7, 2, 4, 1, 6].reverse();

// console.log(numbers);

// 2-MASALA

// let str = "Hello world";
// let res = str.split("").reverse().join("");
// console.log(res);

// 3-MASALA

// let number = [1, 2, 3, 4, 5, 6, 7].reverse();
// console.log(number);

// ToString

// 1-MASALA

// let number = [1, 2, 3, 4, 5, 6, 7];
// let res = number.toString();
// console.log(res);

// 2-MASALA

// let number = ["Hello", " BMW", " Prime"];
// let res = number.toString();
// console.log(res);

// 3-MASALA

// let number = [1, 2, 3, 4, 5, 6, 7];
// let res = number.toString();
// console.log(res);

// Join

// 1-MASALA
// let number = [1, 2, 3, 4, 5, 6, 7];
// let res = number.join("-");
// console.log(res);

// 2-MASALA

// let number = ["Hello", "BMW", "Prime"];
// let res = number.join(" ");
// console.log(res);

// 3-MASALA

// let number = ["Hello", "BMW", "Prime"];
// let res = number.join("|");
// console.log(res);

// Push, Shift

// 1-MASALA

// let arr = ["Hello", "BMW", "Prime"];
// arr.push("Warrior");
// console.log(arr);

// 2-MASALA

// let arr = ["Hello", "BMW", "Prime", false, 5];
// arr.shift();
// console.log(arr);

// 3-MASALA

// let arr = ["Hello", "BMW", "Prime", false];
// arr.push("Warrior", true, 5);
// arr.shift();

// console.log(arr);

// Unshift, Pop

// 1-MASALA

// let arr = ["Hello", "BMW", "Prime"];
// arr.unshift("Warrior");

// console.log(arr);

// 2-MASALA

// let arr = ["Hello", "BMW", "Prime", "Warrior"];
// arr.pop();
// console.log(arr);

// 3-MASALA

// let arr = ["Hello", "BMW", "Prime", "Warrior"];

// arr.unshift("Tesla");
// console.log(arr);
// arr.push("Toyato");
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.pop();
// console.log(arr);

// Qiyinroq masalalar

// 1-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12];

// if (arr.length % 2 !== 0) {
//   let arrMiddle = Math.floor(arr.length / 2);
//   arr.splice(arrMiddle, 1);
//   console.log(arr);
// } else {
//   let arrMiddle = arr.length / 2;
//   console.log(arr.slice(0, arrMiddle));
//   console.log(arr.slice(arrMiddle));
// }

// 2-MASALA

// let arr1 = ["Salom", 1, 2, "BMW", 3, 4, 5];
// let arr2 = [6, "Warrior", 7, 8, 9, "Prime", 10];
// let res = arr1.concat(arr2);

// let arr3 = [];

// for (let i = 0; i < res.length; i++) {
//   if (typeof res[i] === "number") {
//     arr3.push(res[i]);
//   }
// }

// console.log(arr3);

// 3-MASALA

// let arr = ["Hello", "BMW", false, 5, "Prime", "Warrior"];

// let value = "Warrior";

// if (arr.includes(value)) {
//   arr.splice(arr.indexOf(value), 1);
// } else {
//   arr.push("Tesla");
// }

// console.log(arr);

// 4-MASALA

// let arr = ["Hello", "BMW", false, 5, "Prime", "Warrior", "BMW", "TESLA"];
// let value = "BMW";
// let index1 = arr.indexOf(value);
// let index2 = arr.lastIndexOf(value);

// let res = arr.slice(index1, index2 + 1);

// console.log(res);

// 5-MASALA
// let arr = ["Salom", 4, 1, "BMW", 3, 5, 2];
// let numbers = [];
// let strs = [];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "number") {
//     numbers.push(arr[i]);
//   } else if (typeof arr[i] === "string") {
//     strs.push(arr[i]);
//   }
// }

// numbers.sort((a, b) => a - b);
// strs.reverse();

// console.log(numbers);
// console.log(strs);

// 6-MASALA

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let res = "";
// for (let i = 0; i < arr.length; i++) {
//   res += arr[i] * 2;
//   if (i < arr.length - 1) {
//     res += ", ";
//   }
// }

// console.log(res);

// 7-MASALA

// let arr1 = ["hello", "bmw", "prime"];
// let arr2 = ["salom", "tesla", "warrior"];
// let arr3 = ["world", "tayoto"];
// let str = "";
// let res = arr1.concat(arr2, arr3);

// str = res.join("-");
// str = str.toUpperCase();
// console.log(str);

// 8-MASALA
// let arr = ["Hello", "BMW", "Prime", "Tesla", "Warrior"];

// arr.shift();
// arr.pop();

// let res = arr.join(":");

// console.log(res);

// 9-MASALA
// let arr = [3, 5, 2];

// arr.unshift(1);
// arr.push(4);

// arr.sort((a, b) => a - b);

// let res = arr.slice(-3);

// console.log(res);

// 10-MASALA

// let arr = [5, 2, 1, 7, 2, 6, 3, 4];
// arr.reverse();
// arr.splice(0, 2);
// arr.splice(-3, 3);
// arr.sort((a, b) => a - b);

// console.log(arr);
