const express = require('express')
const cors = require('cors')

const dogs = require('./dogs')
const logger = require('./logger')

const app = express() //server 

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.status(200).send('Hello Reddy!!!!')
})

// http://localhost:3000/dogs
app.get('/dogs', (req, res) => {
    res.status(200).send(dogs)
})


app.get('/dogs/:id', (req, res) => {
    const idx = req.params.id - 1
    const dog = dogs[idx]

    if (!dog) {
        res.status(404).send({ error: "dog breed not found", status: 404 })
      } else {
        res.status(200).send(dog)
      }
    })

app.post('/dogs', (req, res) => {
    const dog = req.body
    const lastDog = dogs[dogs.length - 1]
    
    const lastId = lastDog.id + 1
    dog.id = lastId
    
    dogs.push(dog)
    res.status(201).send(dog)
    })

app.patch('/dogs/:id', (req, res) => {

})

app.delete('/dogs/:id', (req, res) => {
    
})


module.exports = app



