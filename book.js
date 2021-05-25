"use strict";
let dataSource = [
    {
        id: 1,
        title: "Мастер и Маргарита",
        genre: "роман",
        authors: "Булгаков М.А.",
        review: "«Мастер и Маргарита» – блистательный шедевр, созданный Михаилом Булгаковым завораживающая мистическая дьяволиада, обнажающая вечные темы любви, борьбы добра со злом, смерти и бессмертия. Эта книга – на века, она не теряет своей привлекательности; прочтя первую фразу: «В час жаркого весеннего заката на Патриарших прудах появились двое граждан…», мы добровольно, неминуемо и безвозвратно погружаемся в мир Мастера, Маргариты, Пилата, Воланда, Азазелло с Коровьевым и других героев романа.",
        img: "<img src='1.jpg' alt='Мастер и Маргарита'/>"
    },
    {
        id: 2,
        title: "Евгений Онегин",
        genre: "роман",
        authors: "Пушкин А.С.",
        review: "Роман в стихах русского писателя и поэта А.С.Пушкина, написанный в 1823—1830 годах, одно из самых значительных произведений русской словесности. Повествование ведётся от имени безымянного автора, который представился добрым приятелем Онегина",
        img: "<img src='2.png' alt ='Евгений Онегин'/>"
    },
    {
        id: 3,
        title: "Мцыри",
        genre: "поэзия",
        authors: "Лермонтов М.Ю.",
        review: "Романтическая поэма М. Ю. Лермонтова, написанная в 1839 году и опубликованная (с цензурными пропусками) в 1840 году в единственном прижизненном издании поэта — сборнике «Стихотворения М. Лермонтова». Она относится к поздним кавказским поэмам Лермонтова и считается одним из последних классических образцов русской романтической поэзии.",
        img: "<img src='3.jpg' alt ='Мцыри'/>"
    },
    {
        id: 4,
        title: "Рассказ о Шерлоке Холмсе",
        genre: "детектив",
        authors: "Конан Дойль А.",
        review: "В этой книге знаменитый сыщик Шерлок Холмс и его друг доктор Уотсон раскрывают самые запутанные преступления и ловят самых ловких злодеев.",
        img:"<img src='4.jpg' alt = 'Рассказ о Шерлоке Холмсе'/>"
    },
]

let table = document.getElementById('table');

function renderRows() {
    for (let book of dataSource) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.onclick = () => {
            document.location.href = `./aboutBook.html?title=${book.title}&genre=${book.genre}&authors=${book.authors}&review=${book.review}&img=${book.img}`
        }
        td1.innerHTML = `<a href = '#'>${book.title}</a>`;

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