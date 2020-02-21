//1.1
// x recieve property
//1.2
// const product = {
//   name: "Xiaomi rice cooker",
//   price: 1700,
//   brand: "Xiaomi",
//   color: "white"
// };
// for (const item in product) {
//   console.log(`${item} : ${product[item]}`);
// }

//2
const task = {
  subject: "Implement login feature",
  createdBy: "Hoang Ngoc Duc",
  assignTo: "Nguyen Phuong Nam",
  dueDate: "2019-10-08T18:00:24+0000",
  expectedHours: 0.5
};
const { subject, dueDate, assignTo } = task;

//4
// const dictionary = {
//   debug:
//     "The process of figuring out why your program has a certain error and how to fix it",
//   done:
//     "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
//   defect: "The formal word for ‘error’",
//   pm:
//     "The short version of Project Manager, the person in charge of the final result of a project",
//   "ui/ux":
//     "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
// };

// //4.1 + 4.2
// alert("Hi there this is dev dictionary");
// const wordFind = prompt("Enter a key word");
// if (!dictionary[wordFind]) {
//   const newDefinition = prompt(
//     `We could not find the word ${wordFind}, leave your explanation`
//   );
//   dictionary[wordFind] = newDefinition;
//   alert("Done");
//   const wordFind2 = prompt("Enter a key word");
//   alert(`${wordFind2} : ${dictionary[wordFind2]}`);
// } else alert(`${wordFind} : ${dictionary[wordFind]}`);

//5
const product = [
  {
    name: "Xiaomi portable charger 20000mah",
    brand: "xiaomi",
    price: 428,
    color: "White",
    category: "Chager"
  },
  {
    name: "VSmart Active 1",
    brand: "VSmart",
    price: 5487,
    color: "black",
    category: "phone"
  },
  {
    name: "Iphone X",
    brand: "apple",
    price: "21490",
    color: "grey",
    category: "phone"
  },
  {
    name: "Samsung A9",
    brand: "Samsung",
    color: "blue",
    price: 8490,
    category: "phone"
  }
];
//5.1
// for (const item of product) {
//   console.log(`name : ${item.name}`);
//   console.log(`price : ${item.price}`);
// }
//5.2
// let number = Number(prompt("Enter product position"));
// let Product = product[number - 1];
// for (const key in Product) {
//   console.log(`${key} : ${Product[key]}`);
// }
//5.3
// let Category = prompt("Enter your category");
// const CategoryChoice = product.filter((item) => {
//   return item.category === Category;
// });

// for (const item of CategoryChoice) {
//   console.log(`Name : ${item.name}`);
//   console.log(`Price : ${item.price}`);
// }
//5.4
// product[0].provider = "phukienzero dientucc";
// product[1].provider = "tgdd Ddghn vhstore";
// product[2].provider = "tgdd";
// product[3].provider = "tgdd";

// for (const item of product) {
//   console.log(`${item.name}`);
//   console.log(`Price : ${item.price}`);
//   console.log(`Provider : ${item.provider}`);
//}
//5.5
// let choice = prompt("Enter provider");
// const results = product.filter((item) => {
//   return item.provider.includes(choice);
// });
// for (const result of results) {
//   console.log(result);
// }

//6
// console.log(
//   "Hi there this is your learning task to become a front end developer"
// );
// const tasks = [
//   {
//     task: "HTML",
//     complete: false
//   },
//   {
//     task: "CSS",
//     complete: false
//   },
//   {
//     task: "Basic javascript",
//     complete: false
//   },
//   {
//     task: "Node Package management (NPM)",
//     complete: false
//   },
//   {
//     task: "Git",
//     complete: false
//   }
// ];
// const command = prompt(
//   "Enter your cammand (New,Update,Delete,Complete)"
// ).toLowerCase();
// if (command === "new") {
//   const newThing = prompt("Enter new task");
//   const newTask = {
//     task: newThing,
//     complete: false
//   };
//   tasks.push(newTask);
// } else if (command === "delete") {
//   let index = Number(prompt("Enter position"));
//   tasks.splice(index - 1, 1);
// } else if (command === "update") {
//   let index = Number(prompt("Enter position"));
//   let newUpdate = prompt("Enter new title");
//   tasks[index - 1].task = newUpdate;
// } else if (command === "complete") {
//   let index = Number(prompt("Enter position"));
//   tasks[index - 1].complete = true;
// }
// console.log(tasks);
//7
// const pos = {
//   x: 200,
//   y: 50
// };
// penup();
// rt(90);
// fd(pos.x);
// lt(90);
// fd(pos.y);
//8
// const square = {
//   x: 100,
//   y: 50,
//   width: 20
// };
// rt(90);
// fd(square.x);
// lt(90);
// fd(square.y);
// pendown();
// for (let i = 0; i < 4; i++) {
//   fd(square.width);
//   rt(90);
// }
// 9
// const rect = {
//   x: 100,
//   y: 50,
//   width: 20,
//   height: 40
// };
// rt(90);
// fd(rect.x);
// lt(90);
// fd(rect.y);
// pendown();
// for (let i = 0; i < 2; i++) {
//   fd(rect.height);
//   rt(90);
//   fd(rect.width);
//   rt(90);
// }
// 10
// const cmds = [
//     {
//         shape: 'square',
//         x: 20,
//         y: 40,
//         width: 50,
//     },
//     {
//         shape: 'rect',
//         x: 8,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 70,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 20,
//         width: 70,
//         height: 20,
//     },
//     {
//         shape: 'square',
//         x: 25,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 33,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 50,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 58,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 40,
//         y: 25,
//         width: 8,
//     },
//     {
//         shape: 'square',
//         penWidth: 1,
//         x: 500,
//         y: 500,
//         width: 15,
//     },
// ]
// for (const cmd of cmds) {
//     if(cmd.penWidth) {
//         penwidth(cmd.penWidth);
//     }
//     if(cmd.shape === 'square') {
//         penup();
//         rt (90);
//         fd (cmd.x);
//         lt (90);
//         fd (cmd.y);
//         pendown();
//         for(let i=0; i < 4; i++) {
//             fd (cmd.width);
//             rt(90);
//         }
//     } else if (cmd.shape === 'rect') {
//         penup();
//         rt (90);
//         fd (cmd.x);
//         lt (90);
//         fd (cmd.y);
//         pendown();
//         for (let i = 0; i < 2; i++) {
//             fd(cmd.height);
//             rt(90);
//             fd(cmd.width);
//             rt(90);
//         }
//     }
//     home();
// }

// 11 + 12
// const cmds = [
//   {
//     shape: "circle",
//     x: 0,
//     y: -20,
//     radius: 60
//   },
//   {
//     shape: "circle",
//     x: 0,
//     y: 80,
//     radius: 40
//   },
//   {
//     shape: "circle",
//     x: -75,
//     y: 10,
//     radius: 20
//   },
//   {
//     shape: "circle",
//     x: 75,
//     y: 10,
//     radius: 20
//   },
//   {
//     shape: "square",
//     x: -65,
//     y: -100,
//     width: 30
//   },
//   {
//     shape: "square",
//     x: 38,
//     y: -100,
//     width: 30
//   },

//   {
//     shape: "rect",
//     x: -30,
//     y: 80,
//     width: 20,
//     height: 4
//   },
//   {
//     shape: "rect",
//     x: 10,
//     y: 80,
//     width: 20,
//     height: 4
//   },
//   {
//     shape: "rect",
//     x: -10,
//     y: 50,
//     width: 20,
//     height: 6
//   },
//   {
//     shape: "square",
//     x: 500,
//     y: 500,
//     width: 20
//   }
// ];
// function draw(x, y) {
//   rt(90);
//   fd(x);
//   lt(90);
//   fd(y);
// }
// function drawSquare(width) {
//   for (let i = 0; i < 4; i++) {
//     fd(width);
//     rt(90);
//   }
// }
// function drawRect(height, width) {
//   for (let i = 0; i < 2; i++) {
//     fd(height);
//     rt(90);
//     fd(width);
//     rt(90);
//   }
// }
// function drawCircle(radius) {
//   for (let i = 0; i < 100; i++) {
//     fd(radius);
//     rt(90);
//     for (let i = 0; i < 96; i++) {
//       fd((radius / 30) * 2);
//       rt(360 / 96);
//     }
//   }
// }
// for (const cmd of cmds) {
//   if (cmd.shape === "square") {
//     penup();
//     draw(cmd.x, cmd.y);
//     pendown();
//     drawSquare(cmd.width);
//   } else if (cmd.shape === "rect") {
//     penup();
//     draw(cmd.x, cmd.y);
//     pendown();
//     drawRect(cmd.height, cmd.width);
//   } else if (cmd.shape === "circle") {
//     penup();
//     draw(cmd.x, cmd.y);
//     pendown();
//     drawCircle(cmd.radius);
//   }
// }
//16
const oldData = {
  firedRice: {
    Price: 30,
    vnName: "Com rang dua bo"
  },
  noddle: {
    price: 20,
    vnName: "My tom chanh"
  },
  pho: {
    price: 35,
    vnName: "Pho bo tai chin"
  }
};
const newData = { ...oldData };
delete newData["noddle"];
console.log(newData);
