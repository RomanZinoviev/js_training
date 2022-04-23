// const magic = 'авадакедавра'
// const magicSplit = magic.split('');
// console.log(magicSplit);
// let totalCount = 0;

// for (let index = 0; index < magicSplit.length; index += 1) {
// 	const element = magicSplit[index];
// 	// console.log(element);
	
// 	if (element === "а") {
// 		console.log(element);
// 		totalCount += 1;
// 		magicSplit.splice(index, 1)

// 	}

// }
// console.log(totalCount);
// console.log(magicSplit);

// const magicString = magicSplit.join("");

// console.log(magicString);



// // 1. перебираем массив (for of)
// // 2. проверяем остато деления элемента на 2. Если = 0 - число четное
// // 3. ноль - "нечетное"
// // 4. добавляем четное чист\ло в новый массив

// const numArray = [1, 0, -4, 9, -2, 35, 8, 42];
// const resArray = [];

// for (const number of numArray) {
//   if (!number) {
//     continue;
//   }

//   if (number % 2 === 0) {
//     resArray.push(number);
//   }
// }

// console.log(resArray);


// const cards = ["privat", "mono", "alfa"]

// const input = prompt("Enter card name")

// // 1.создаем функцию, которая принрмает значение input
// // 2. Проверяем присустсвует ли input в card
// // 3. Если нет то карта не найдена
// // 4. Если есть то предоагаем положить деньги на карту, и в промте положить сумму
// // 5. Выводим в консоль лог

// function mycard(cardName, cardArrey, initialSum) {
//     const hasCard = cardArrey.includes(cardName)
//     console.log(hasCard)
    
//     if (!hasCard) {
//         alert("карта не найдена")
//         const re_Input = prompt("Введите еще раз ")
//         mycard(re_Input, cardArrey, initialSum)
//     }
//     if (hasCard) {
//         const summ = Number(prompt("Введите сумму"))
//         console.log(summ)
//         if (isNaN(summ)) { return }
//         const total = initialSum + summ
//         return total
//     }

    
    
//  }

// const result = mycard(input, cards, 500)
// console.log(result)

// const future = {
    
// }

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//        for(let i=0; i<=this.potions.length; i+=1){
//       this.potions.splice(i[potionName], 1);
//       console.log(this.potions)}
//     return this.potion


//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath")
// console.log(atTheOldToad.potions)


// users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
// //     eyeColor: "brown",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     isActive: true,
// //     balance: 2764,
// //     gender: "female"
// //   }
// // ]
// // const getTotalFriendCount = users => {
// //   const allFriends = users.flatMap(user => user.friends);
// //   // console.log(allFriends)
// //   return allFriends.reduce((acc, friend)=>{
// //       acc+=1
// //     return acc
// //   },0)
// // };
// // console.log(getTotalFriendCount(users))

// // const friends = [
// //     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
// //     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
// //     { name: "Alice", books: ["War and peace", "Romeo and Juliet"]},
// //     { name: "Oleksii", books: ["Bible","War and peace","Harry Potter",  "Romeo and Juliet"], age: 26},

// // Task-2: Порахувати кількість книжок користувачів, у яких є книга "Harry Potter",не використовуючи метод includes.
// // (перевірити користувачів на наявність потрібної книги за допомогою indexOf(const searchBook = "Harry Potter"


// // const searchBook = "Harry Potter"

// // const totalBooks = friends.reduce((acc, friend) => {
// //   // console.log(!!~friend.books.indexOf(searchBook))
// //   if (!!~friend.books.indexOf(searchBook)) {
// //    return acc+friend.books.length
// //   }
// //   return acc+0
// // },0)
// // console.log(totalBooks)

// // const cars = [
// //   { brand: "Audi", cost: 11000 },
// //   { brand: "BMW", cost: 9000 },
// //   { brand: "Honda", cost: 8000 },
// //   { brand: "Tesla", cost: 40000 },
// //   { brand: "VW", cost: 7000 },
// // ];

// // const minValue = Number(prompt("From"));
// // let maxValue = Number(prompt("To"));
// // console.log(minValue);

// // if (maxValue === 0) {
// //     maxValue = Infinity;
// // }
// // console.log(maxValue);
// // const filterCars = cars.filter(car => {
// //     if (car.cost >= minValue && car.cost <= maxValue) {
// //         return car;
// //     }

// // })
// // console.log(filterCars);

// // const bank = {
// //   name: 'Jordj',
// //   cardname:' Privat',
// //   total: 3600,
// //   totalSum() {
// //     console.log(`${this.name} , balance: ${this.total}`);
// //   },
// //   add(enterSum) {
// //     this.total += enterSum;
// //     bank.totalSum.call(this);
// //   },
// //   writeOf(escapeSum) {
// //     this.total -= escapeSum;
// //     bank.totalSum.call(this);
// //   },
// // };

// // bank.totalSum ();


// // const Den = {
// //     name: 'Den',
// //     cardName: 'Monobank',
// //     total: 10000,
// // };

// // bank.totalSum.call(Den);

// // bank.add(1000);

// // bank.add.apply(Den, [5000]);

// // const escapeMoney = bank.writeOf.bind(Den);
// // escapeMoney(4000);

// const products = [ {
//     id : 'sku1',
//     qty: 1,
// }, {
//     id : 'sku2',
//     qty: 2,
// }, {
//     id : 'sku3',
//     qty: 3,
// }, {
//     id : 'sku1',
//     qty: 6,
// }, {
//     id : 'sku1',
//     qty: 8,
// }, {
//     id : 'sku2',
//     qty: 19,
// }, {
//     id : 'sku4',
//     qty: 1,
// }]

// // products.forEach((product, i) => {
// //   if(product[i].id === product[i + 1].id) {
// //     product[i].qty + product[i + 1].qty;
// //     products.slice(i);
// //   }
// //   return products
// // })

// const removeSameProdact = function (products) {
//   for (let i = 0; i < products.length; i++) {
//     for (let j = i + 1; j < products.length; j++) {
//       if (products[i].id == products[j].id) {
//         products[i].qty += products[j].qty;
//         products.splice(j, 1);
//         j-=1
//       }
//     }
//   }
//   console.log(products)
  
// };
// removeSameProdact(products)

// const hogvarts = {
//     griffindor: [{
//             name: "Harry",
//             points: 15
//         },
//         {
//             name: "Hermiona",
//             points: 16
//         },
//         {
//             name: "Ron",
//             points: 14
//         },
//     ],
//     sliserin: [{
//             name: "Draco",
//             points: 25
//         },
//         {
//             name: "Goyl",
//             points: 40
//         },
//         {
//             name: "Crabbe",
//             points: 5
//         },
//     ]
// }
// //задача 3 вывести всех студентов. которые учатся в гриф. или  в слизарене
// //динамически добавлять тотал сум слизарен и гриффендор
// hogvarts.allStudents('griffindor')
// hogvarts.allStudents('sliserin')
// hogvarts.allPoints('sliserin')


//Потрібно створити
// const people = [{
//  const people1 = [{
//     name: 'Alex',
const people3 = [{
    name: 'Alex',
    know: ['Alex', 'Eva'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: []
},
{
    name: 'Ivan',
    know: ['Jhon', 'Eva']
}];

const people = [{
    name: 'Alex',
    know: ['Alex', 'Eva'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Ivan',
    know: ['Jhon', 'Eva']
},
];
 const people1 = [{
    name: 'Alex',
    know: ['Alex', 'Jhon'],
},
{
    name: 'Jhon',
    know: []
},
{
    name: 'Eva',
    know: ['Alex', 'Jhon']
},
{
    name: 'Ivan',
    know: ['Jhon', 'Eva']
},
];/// нарцис  'Jhon'



// function findName(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i].know.includes(array[j].name) && array[j].know.length === 0) {
//                 console.log(array[j].name)
//                 return array[i].name;
                
//             };
            
//         };
//     };
    
// };

// findName(people3);

// const nameN = people3.filter(p => { p.know.length === 0 }).every(i => {
//     i.know.includes(p.name);
// console.log(i)});

// console.log(nameN);

// function findName(arr) {
//     const mabeNar = arr.filter(({ know }) => !know.length)
//     if (mabeNar.length !== 1)
//     { return "" };
//     const name = mabeNar.reduce((acc, { name }) => acc + name, "");
//     const isNar = arr.filter(({ know }) => know.length).every(({ know }) => know.includes(name));
//     return isNar ? name : "";
// };
// console.log(findName(people1))

// const Andrey = 'Andrey';
// const Artem = 'Artem';

// String.prototype.__proto__ = Object.create(null, {
//     privet : {
//         value : function (name) {
//             console.log(`Ny privet ${name}`);
//         }
//     }
// })

// String.prototype.poka = function(name){
//     console.log(`Ny poka ${name}`)
// }

// Andrey.privet(Andrey)
// Artem.privet(Artem)

// Andrey.poka(Andrey)
// Artem.poka(Artem)




// function dog(name) {
//     this.name = name;
// }


// dog.prototype.gav = function () {
//     console.log(`${this.name} GAV GAV`);
// }

// class Bobik extends dog {

// }

// class SecondBobik extends Bobik {
//     sidet() {
//         console.log(`${this.name} OK BoSS`);
//     }
// }

// let bobik = new Bobik('Bobik')

// let secondBobik = new SecondBobik('Gavchik')


// secondBobik.gav()

// secondBobik.sidet()
