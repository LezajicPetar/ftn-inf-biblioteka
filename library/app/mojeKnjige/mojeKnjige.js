'use strict'

class Knjiga {
    constructor(id, naziv, datumStampanja, url, opis, popularnost) {
        this.id = id
        this.naziv = naziv
        this.datumStampanja = datumStampanja
        this.url = url
        this.opis = opis
        this.popularnost = popularnost
    }
}

let iznajmljeneKnjige = [new Knjiga('Knjiga 1', 'Autor 1', '1234567890123', '2023-01-01', '2023-02-01'),
new Knjiga('Knjiga 2', 'Autor 2', '1234567890124', '2023-01-15', '2023-02-15'),
new Knjiga('Knjiga 3', 'Autor 3', '1234567890125', '2023-02-01', '2023-03-01'),]

let dostupneKnjige = []

let sveKnjige = JSON.parse(localStorage.getItem('listaKnjigaStorage'))

function createTableRowsIznajmljene() {
    let tBody = document.getElementById('tabelaIznajmljenihKnjiga')

    for (let i = 0; i < iznajmljeneKnjige.length; i++) {
        let tr = document.createElement('tr')

        let br = document.createElement('td')
        let naziv = document.createElement('td')
        let btn = document.createElement('button')
        let btnTd = document.createElement('td')

        br.textContent = iznajmljeneKnjige[i].id
        naziv.textContent = iznajmljeneKnjige[i].naziv
        btn.textContent = 'Vrati knjigu'

        btn.addEventListener('click', () => {vratiKnjigu(i)})

        btnTd.appendChild(btn)
        tr.appendChild(br)
        tr.appendChild(naziv)
        tr.appendChild(btnTd)
        tBody.appendChild(tr)
    }
}
function vratiKnjigu(id) {
    let knjiga = iznajmljeneKnjige[id]
    dostupneKnjige.push(knjiga)

    iznajmljeneKnjige.splice(id, 1)

    createTableRowsIznajmljene()
}

function initialize() {
    createTableRowsIznajmljene()
}

document.addEventListener('DOMContentLoaded', initialize)