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

(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      body: document.querySelector("body"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();
  ////////////////////////// резервная / модалка//////////////////////////////////////////////
  // var modal = document.getElementById('myModal');
  
  // // Get the button that opens the modal
  // var btn = document.getElementById("myBtn");
  
  // // Get the <span> element that closes the modal
  // var button = document.getElementsByClassName("close")[0];
  
  // // When the user clicks the button, open the modal 
  // btn.onclick = function() {
  //     modal.style.display = "block";
  // }
  
  // // When the user clicks on <btn> (x), close the modal
  // button.onclick = function() {
  //     modal.style.display = "none";
  // }
  
  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //     if (event.target == modal) {
  //         modal.style.display = "none";
  //     }
  // }
  
                     //////// моя модалка........///////
  // document.addEventListener('DOMContentLoaded', function() {
  //   var modalButtons = document.querySelectorAll('.js-open-modal'),
  //       overlay      = document.querySelector('#overlay-modal'),
  //       closeButtons = document.querySelector('.js-modal-close');
    
    
  //   modalButtons.forEach(function(item){
       
  //      item.addEventListener('click', function(e) {
          
  //         e.preventDefault();
  //         var modalId = this.getAttribute('data-modal'),
  //             modalElem = document.querySelector('.modal[data-modal="' + modalId +'"]');
          
  //         modalElem.classList.add('active');
  //         overlay.classList.add('active');
  //         closeButtons.forEach(function(item) {
  //           item.addEventListener('click', function(e) {
  //           });
        
  //         }); // end foreach
  //      }); // end click
  //   }); // end foreach
  // }); // end ready
  const openBtn = document.querySelector('#open'),
  modal = document.querySelector('#modal'),
  closeBtn = document.querySelector('#close');
  
  openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
  });
  
  closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  });
  
  window.addEventListener("click", (e) => {
  const target = e.target;
  if (target === modal) {
  modal.style.display = "none";
  }
  });