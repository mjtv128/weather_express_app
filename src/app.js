const path = require("path");
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public");

app.set('view engine', 'hbs')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'Mich'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        aboutme: 'This is about me'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpMessage: 'If you need any help, please contact us'
    })
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