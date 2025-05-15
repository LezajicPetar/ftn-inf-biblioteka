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

// let listaKnjigaZaCuvanje = [new Knjiga(1, 'Knjiga 1', '2023-10-01', 'https://example.com/knjiga1', 'Opis knjige 1', 5),
// new Knjiga(2, 'Knjiga 2', '2023-10-02', 'https://example.com/knjiga2', 'Opis knjige 2', 4),
// new Knjiga(3, 'Knjiga 3', '2023-10-03', 'https://example.com/knjiga3', 'Opis knjige 3', 3),
// new Knjiga(4, 'Knjiga 4', '2023-10-04', 'https://example.com/knjiga4', 'Opis knjige 4', 2),
// new Knjiga(5, 'Knjiga 5', '2023-10-05', 'https://example.com/knjiga5', 'Opis knjige 5', 1)
// ]

// localStorage.setItem('listaKnjigaStorage', JSON.stringify(listaKnjigaZaCuvanje))

function createTableRows() {
    let tBody = document.getElementById('tabelaKnjigaBody')
    tBody.innerHTML = ''

    let listaKnjiga = JSON.parse(localStorage.getItem('listaKnjigaStorage')) || []

    for (let i = 0; i < listaKnjiga.length; i++) {
        let tr = document.createElement('tr')

        let id = document.createElement('td')
        let naziv = document.createElement('td')
        let tdBtn = document.createElement('td')
        let obrisiBtn = document.createElement('button')

        id.innerText = listaKnjiga[i].id
        naziv.innerText = listaKnjiga[i].naziv
        obrisiBtn.innerText = 'Obriši'

        obrisiBtn.addEventListener('click', () => {
            obrisiKnjigu(listaKnjiga, i)
        })

        tdBtn.appendChild(obrisiBtn)
        tr.appendChild(id)
        tr.appendChild(naziv)
        tr.appendChild(tdBtn)
        tBody.appendChild(tr)
    }
}

function obrisiKnjigu(listaKnjiga, id) {
    listaKnjiga.splice(id, 1)
    localStorage.setItem('listaKnjigaStorage', JSON.stringify(listaKnjiga))

    createTableRows()
}

document.addEventListener('DOMContentLoaded', createTableRows)