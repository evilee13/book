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
        this.createFilter();
    }

    redraw(data) {
        data ? this.render(data) :
            this.render(this.dataSource);
    }

    filter(columnName, value) {
        return this.dataSource.filter(item => {
            return item[columnName] === value;
        })
    }

    createFilter() {
        let input = document.createElement("input");
        input.type = "text";
        input.id = 'filterText';
        input.innerHTML = 'Фильтр';
        document.body.appendChild(input)

        let buttonFilter = document.createElement("button");
        buttonFilter.innerHTML = "Отфильтровать"
        buttonFilter.id = 'buttonFilter'
        document.body.appendChild(buttonFilter)
        buttonFilter.addEventListener('click', () => {
            this.filterParams ={column:"genre",value:input.value.toLowerCase()}
            this.redraw(this.filter('genre', input.value.toLowerCase()))
        })
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
        if (this.filterParams) {
            data = this.filter(this.filterParams.column,this.filterParams.value)
        }
        for (let i = 0; i < data.length; i++) {
            let tableRow = data[i];
            let tr = document.createElement('tr');
            for (let col of this.columns) {
                this.renderer(i, tableRow, col.columnName, tr)
            }
            tr.dataset.id = tableRow.id
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

    createButton() {
        let btn = document.createElement("BUTTON");
        btn.innerHTML = "Удалить строку";
        btn.id = 'delRow';
        document.body.appendChild(btn)
        btn.addEventListener('click', () => {
            let listOfElements = document.querySelectorAll('.highlight');
            Array.from(listOfElements);
            let indexElem = [];
            listOfElements.forEach(function (element) {
                indexElem.push(element.dataset.id)
            })
            this.remove(indexElem[0])
            this.redraw()
        })
    }

    remove(id) {
        this.dataSource.forEach((item, index) => {
            if (Number.parseInt(item.id) === Number.parseInt(id)) {
                this.dataSource.splice(index, 1)
            }
        })
    }
}
