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
}