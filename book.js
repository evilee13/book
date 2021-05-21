"use strict";
let dataSource = [
    {
        id: 1,
        title: "Мастер и Маргарита",
        genre: "роман",
        authors: "Булгаков М.А.",
        review: "«Мастер и Маргарита» – блистательный шедевр, созданный Михаилом Булгаковым завораживающая мистическая дьяволиада, обнажающая вечные темы любви, борьбы добра со злом, смерти и бессмертия. Эта книга – на века, она не теряет своей привлекательности; прочтя первую фразу: «В час жаркого весеннего заката на Патриарших прудах появились двое граждан…», мы добровольно, неминуемо и безвозвратно погружаемся в мир Мастера, Маргариты, Пилата, Воланда, Азазелло с Коровьевым и других героев романа.",
    },
    {
        id: 2,
        title: "Евгений Онегин",
        genre: "роман",
        authors: "Пушкин А.С.",
        review: "Роман в стихах русского писателя и поэта А.С.Пушкина, написанный в 1823—1830 годах, одно из самых значительных произведений русской словесности. Повествование ведётся от имени безымянного автора, который представился добрым приятелем Онегина",
    },
    {
        id: 3,
        title: "Мцыри",
        genre: "поэзия",
        authors: "Лермонтов М.Ю.",
        review: "Романтическая поэма М. Ю. Лермонтова, написанная в 1839 году и опубликованная (с цензурными пропусками) в 1840 году в единственном прижизненном издании поэта — сборнике «Стихотворения М. Лермонтова». Она относится к поздним кавказским поэмам Лермонтова и считается одним из последних классических образцов русской романтической поэзии.",
    },
    {
        id: 4,
        title: "Рассказ о Шерлоке Холмсе",
        genre: "детектив",
        authors: "Конан Дойль А.",
        review:"В этой книге знаменитый сыщик Шерлок Холмс и его друг доктор Уотсон раскрывают самые запутанные преступления и ловят самых ловких злодеев."
    },
]

let table = document.getElementById('table');
for (let book of dataSource) {
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.onclick = () => {document.location.href = './aboutBook.html'}
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
document.getElementById('titleOfBooks').addEventListener('click',byField);
function byField(field) {
    return (a, b) => a[field] > b[field] ? 1 : -1;
}
dataSource.sort(byField('title'))
dataSource.forEach(dataSource => console.log(dataSource.title))

