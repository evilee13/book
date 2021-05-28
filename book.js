import {dataSource} from "./baseOfBooks.js";

"use strict";

let table = document.getElementById('table');

function renderRows() {
    for (let book of dataSource) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let link = document.createElement("a")
        link.innerHTML = book.title;
        link.href =`./aboutBook.html?id=${book.id}`
        td1.appendChild(link);

        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = book.genre;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = book.authors;
        tr.appendChild(td3);

        table.appendChild(tr);
    }
}

function sortBook(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}

document.addEventListener('DOMContentLoaded', renderRows);
document.getElementById('titleOfBooks').addEventListener('click', () => {
    dataSource.sort(sortBook('title'))
    dataSource.map(removeRows)
    renderRows()
});

function removeRows() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }
}
