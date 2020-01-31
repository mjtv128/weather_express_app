const path = require("path");

const express = require('express')

const publicDirectoryPath = path.join(__dirname, '../public')

const app = express()

app.use(express.static(publicDirectoryPath))

app.get('/help', (req, res) => {
    res.send([{
        name: "Michelle",
        age: 27
    }, {
        name: "Sarah"
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'Sunny',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server has started on PORT 3000')
})