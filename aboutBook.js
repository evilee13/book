"use strict";
let urlParams = new URLSearchParams(document.location.search);
let params = {};
urlParams.forEach((p, key) => {
    params [key] = p;
});
for (let books in params) {
    let element = document.getElementById(books);
    if (element) {
        element.innerHTML = (params[books]);
    }
  //  switch (params.title) {
    //    case 'Мастер и Маргарита':
      //      document.getElementById('book1').innerHTML="<img src='1.jpg'/>";
        //    break;
        //case 'Евгений Онегин':
          //  document.getElementById('book2').innerHTML="<img src='2.png'/>";
            //break;
        //case    'Мцыри':
          //  document.getElementById('book3').innerHTML="<img src='3.jpg'/>";
            //break;
        //case 'Рассказ о Шерлоке Холмсе':
          //  document.getElementById('book4').innerHTML="<img src='4.jpg'/>";
            //break;
    }
//}