const express = require('express')
const routes = express.Router()


let db = [
    { '1' : {nome : 'Leonardo', Idade : '24'}},
    { '2' : {nome : 'Julia',    Idade : '20'}},
    { '3' : {nome : 'Geraldo',  Idade : '48'}},
    { '4' : {nome : 'Sueli',    Idade : '53'}}
]


//Buscar Dados
routes.get('/', (req, res) => {
    return res.json(db)
})


//Inserir Dados
routes.post('/add', (req, res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})


routes.delete('/:id', (req, res) => {
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
            return item
    })

    db = newDB

    return res.send(newDB)
})


module.exports = routes