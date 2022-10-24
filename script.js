//  function User(name) {
//     this.name = name;}
// User.prototype.sayHi = function () {
//   alert(this.name);
// }
// let user = new User("hello");
// user.sayHi();

// вспливаюче повідомлення
// function makeClass(asdf) {
//   return class {
//     sayHi() {
//       confirm(asdf);
//     }
//   };
// }
// let User = makeClass("бажаєте переглянути сайт?");
// new User().sayHi();

                     //   об'єкт

// let user = {};
// user.name = "ivan";
// user.surName = "Smit";
// user.name = "petro";
// delete user.name;

// console.log(user.name);

                 //   перевірка на порожнечу

// let schedule = {};
// alert(isEmpty(schedule)); // true
// schedule["8:30"] = "Вставай";
// alert(isEmpty(schedule)); //

//     function isEmpty(obj) {
//   for (let key in obj) {
//     // якщо цикл розпочався, властивість є
//     return false;
//   }
//   return true;
// }

               //   сума властивостей обьєкта

let salaries = {
    john: 100,
    ann: 160,
    pete: 130,
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key];
}
// alert(sum);
console.log(sum)

