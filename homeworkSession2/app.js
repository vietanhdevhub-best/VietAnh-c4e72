let x = Number(prompt("Enter a number"));
if (x < 4.5) {
  alert("Lower half of 9");
} else {
  alert("Higher half of 9");
}
//3
//a
for (let i = 0; i < 7; i++) {
  console.log(i);
}
// b
// let n = Number(prompt("Enter a number"));
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }
//c
// let n = Number(prompt("Enter a number >= 3"))
// for(let i =3 ; i< n ; i++) {
//   console.log(i);
// }
//d
// let n = Number(prompt("Enter n"));
// let c = Number(prompt("Enter c"));
// for (let i = c; i < n; i++) {
//   console.log(i);
// }

//4
// let n = Number(prompt("Enter a number"));
// let fractional = 1;
// for (let i = 1; i <= n; i++) {
//   fractional = fractional * i;
// }
// alert(`the Fractional of ${n} is ${fractional}`);

//5
// let age = Number(prompt("How old are you???"));
// if (age < 14) {
//   alert("You are not old enough to view this content");
// } else {
//   alert("Enjoy");
// }

//6
// let x = Number(prompt("Enter a number"));
// if (x < 4.5) {
//   alert("Lower half of 9");
// } else {
//   alert("Higher half of 9");
// }

// 7
// let n = Number(prompt("Enter a number"));
// let x = Number(prompt("Enter a number"));
// if (x < n / 2) {
//   alert(`${x} in lower half of ${n}`);
//   alert(`${x} is in lower half of ${n}`);
// } else if (x > n / 2) {
//   alert(`${x} in higher half of ${n}`);
//   alert(`${x} is in higher half of ${n}`);
// }

// 8
// let n = Number(prompt("Enter a number"));
// if (n % 2 === 0) {
//   alert(`${n} is an even number`);
// } else {
//   alert(`${n} is an odd number`);
// }

//9
// a
// for (let i = 0; i < 6; i++) {
//   if (i < 3) {
//     console.log("L");
//   } else {
//     console.log("H");
//   }
// }
// b
// let n = Number(prompt("Enter a number"));
// for (let i = 0; i < n; i++) {
//   if (i < Math.floor(n / 2) + 1) {
//     console.log("L");
//   } else {
//     console.log("H");
//   }
// }
// c
// for (let i = 0; i < 8; i++) {
//   if (i % 2 === 0) {
//     console.log(0);
//   } else console.log(1);
// }
// d
// let n = Number(prompt("Enter a number"));
// for (let i = 0; i < n; i++) {
//   if (i % 2 === 0) {
//     console.log(0);
//   } else console.log(1);
// }

//10
// let wightInKg = Number(prompt("Your weight in kg"));
// let HeightInCm = Number(prompt("Your height in cm"));
// let HeightInM = HeightInCm / 100;
// let BMI1 = wightInKg / (HeightInM * HeightInM);
// let BMI = Number(BMI1.toFixed(1));
// alert(`Your BMI is ${BMI}`);
// if (BMI < 16) {
//   alert("You are severly undeweight");
// } else if (BMI >= 16 && BMI <= 18.5) {
//   alert("You are under weight");
// } else if (BMI >= 18.5 && BMI <= 25) {
//   alert("You are normal");
// } else if (BMI >= 25 && BMI <= 30) {
//   alert("You are overweight");
// } else if (BMI > 30) {
//   alert("You are obese");
// }

//11
// square
// setshape("rocket")
// for(let  i = 0; i < 4; i++) {
//     fd(50);
//     rt(90);
// }
//triangle
// setshape("rocket")
// for (let i = 0; i < 3; i++) {
//   fd(50);
//   rt(120);
// }
// pentagon
// setshape("rocket")
// for (let i = 0; i < 5; i++) {
//   fd(50);
//   rt(360 / 5);
// }
//hexagon
// setshape("rocket")
// for (let i = 0; i < 6; i++) {
//   fd(50);
//   rt(360 / 6);
// }

//12
// setshape("rocket")
// let n = Number(prompt('Enter number of egdes'));
// for(let i= 0 ; i < n; i++) {
//     fd (50);
//     rt (360/n);
// }

//13
// setshape("rocket");
// let n = Number(prompt("How many polygons???"));
// for (let i = 3; i < n + 3; i++) {
//   for (let j = 1; j <= i; j++) {
//     fd(50);
//     rt(360 / i);
//   }
// }
