// 1
// let a = 6;
// let b = 5;
// console.log(a, b);
// let temp = b;
// b = a;
// a = temp;
// console.log(a, b);

//2
// const s = `Hello beauty there`;
// const a = s.split(" ");
// console.log(a);

//3
// const a = [1, 2, 3, 4];
// console.log(...a);

//4
// const clothes = ["ao coc", "quan dui", "quan lot", "vay", "quan bo"];
// let choice = prompt("What do you wan to do???(C,R,U,D)").toLowerCase();
// const command = ["c", "r", "u", "d"];
// if (!command.includes(choice)) {
//   alert("command is not supported!!!");
// }
// if (choice === "c") {
//   let addCloth = prompt("them do gi");
//   clothes.push(addCloth);
//   alert("Done");
//   console.log(clothes);
// } else if (choice === "r") {
//   clothes.forEach((element) => {
//     console.log(element);
//   });
// } else if (choice === "u") {
//   let index = Number(prompt("vi tri sua"));
//   if (!index) {
//     console.log("please enter a number");
//   }
//   if (index > clothes.length) {
//     alert(`please enter a number < ${clothes.length}`);
//     index = Number(prompt("vi tri sua"));
//   }
//   let fix = prompt("thay bang gi");
//   clothes[index] = fix;
// } else if (choice === "d") {
//   let indexDelete = Number(prompt("xoa cho nao???"));
//   clothes.splice(indexDelete, 1);
// }

//5
// const a = prompt("Enter numbers seperated by commas(,)").split(",");
// let total = 0;
// a.forEach((num) => {
//   total += Number(num);
// });
// console.log(total);

//6
// const a = prompt("Enter numbers seperated by commas(,)").split(",");
// const newArray = a.map((num) => {
//   return Number(num);
// });
// const smallestNumber = Math.min(...newArray);
// console.log(smallestNumber);

//7
// const arr = [3, 4, 6, -9, 10, -88, 2];
// let num = Number(prompt("Enter a number"));
// if (!arr.includes(num)) {
//   alert(`${num} is not Found in my array`);
// } else {
//   alert(`${num} is Found at index of ${arr.indexOf(num)}`);
// }

//8
//8.1
// const sizeOfSheep = [5, 7, 300, 90, 24, 50, 75];
// console.log("Hello my name is Viet Anh this is my sheep size");
// console.log(...sizeOfSheep);
// //8.2
// let biggestSize = Math.max(...sizeOfSheep);
// console.log(`Now my biggest sheep has size of ${biggestSize} let shave it`);
// //8.3
// sizeOfSheep[sizeOfSheep.indexOf(biggestSize)] = 8;
// console.log("after shearing here is my size of flock");
// console.log(...sizeOfSheep);
// //8.4 + 8.5
// for (let i = 1; i <= 4; i++) {
//   for (let i = 0; i < sizeOfSheep.length; i++) {
//     sizeOfSheep[i] += 50;
//   }
//   console.log(`Month ${i}`);
//   console.log("One month has passed this is the size of sheep");
//   console.log(...sizeOfSheep);
// }
// //8.6
// let totalSize = 0;
// for (const size of sizeOfSheep) {
//   totalSize += size;
// }
// let moneyGet = totalSize * 2;
// console.log(`My flock has total size of ${totalSize}`);
// console.log(`I would get ${totalSize} * 2$ = ${moneyGet}`);

//9
// let size = 50;
// const colors = ['red', 'gray', 'blue', 'purple', 'cyan'];
// for(let i =0 ; i < colors.length ; i++) {
//   for(let j = 0 ; j < 4; j++) {
//   color(colors[i]);
//   fd(size);
//   rt(90);
//   }
//   size += 50;
// }

//10
// const arrayName = prompt("Enter a sequences of name seperated by commas").split(
//   ","
// );
// const newArray = arrayName.map((name) => {
//   return `<${name}>`;
// });
// alert(`${arrayName} => ${newArray}`);

//11
// const number = prompt("Enter a sequences of number seperated by commas").split(
//   ","
// );
// const newArray = number.map((num) => {
//   return Number(num);
// });
// const oddNumber = newArray.filter((num) => {
//   return num % 2 == 0;
// });
// alert(`${newArray} => ${oddNumber}`);
