import {dataSource} from "./baseOfBooks.js";

"use strict";

function getParams() {
    let parameters = {};
    document.location.search
        .substring(1)
        .split('&')
        .forEach((item) => {
            let param = item.split('=');
            parameters [param [0]] = param [1];
        });
    return parameters;
}

function getElement() {
    let params = getParams();
    return dataSource.find(item => {
        return Number.parseInt(item.id) === Number.parseInt(params.id)
    });
}

function fillElement() {
    let book = getElement();
    for (let books in book) {
        let element = document.getElementById(books);
        if (element) {
            if (element) {
                if (books === 'img') {
                    let img = document.createElement('img')
                    img.src = book[books]
                    element.appendChild(img)
                } else {
                    element.innerHTML = (book[books]);
                }
            }
        }
    }
}

fillElement()
