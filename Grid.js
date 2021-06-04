"use strict"

export default class Grid {
    constructor(id, structure) {
        this.id = id;
        this.tblBody;
        this.columns = structure.columns;
        this.renderer = structure.renderer;
        this.dataSource = structure.dataSource;
        this.table = document.getElementById(id);
        this.createTable();
        this.createButton();

    }

    redraw(data) {
        data ? this.render(data) :
            this.render(this.dataSource);
    }

    filter([columnName, value]) {
        this.render(this.dataSource.filter(item => {
            return item[columnName] === value;
        }))
    }

    createTable() {
        this.tblBody = document.createElement("tbody");
        let tr = document.createElement('tr');
        for (let col of this.columns) {
            let th = document.createElement('th');
            let text = document.createTextNode(col.title);
            th.style.width = col.size;
            th.appendChild(text);
            tr.appendChild(th);
        }
        this.table.appendChild(tr);
        this.table.appendChild(this.tblBody);
    }

    render(data) {
        this.removeRows(this.tblBody);
        for (let i = 0; i < data.length; i++) {
            let book = data[i];
            let tr = document.createElement('tr');
            for (let col of this.columns) {
                this.renderer(i, book, col.columnName, tr)
            }
            tr.dataset.id = book.id
            this.tblBody.appendChild(tr);
        }
        this.tblBody.addEventListener('click', (event) => {
            let target = event.target.closest('tr');
            if (!target) return;
            if (!this.tblBody.contains(target)) return;
            target.classList.add('highlight');
        });

    }

    removeRows(tbody) {
        while (tbody.rows[0]) {
            tbody.deleteRow(0);
        }
    }
    createButton () {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = "Удалить строку";
        document.body.appendChild(btn)
        btn.addEventListener('click', () => {
            let listOfElements = document.querySelectorAll('.highlight');
            Array.from(listOfElements);
            let indexElem = listOfElements.forEach(function (element) {
                return element.dataset.id
            })
            this.dataSource.splice(indexElem, 1)
            this.redraw()
        })
    }
}

// let input = document.createElement("input");
// input.type = "text";
// input.innerHTML="Отфильтровать";
// input.id = 'filterText'
// document.body.appendChild(input)
//
// let buttonFilter= document.createElement("button");
// buttonFilter.innerHTML="Отфильтровать"
// buttonFilter.value = 'filterButton'
// document.body.appendChild(buttonFilter)


