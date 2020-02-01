const path = require("path");
const express = require('express')
const hbs = require('hbs')

const app = express()

//Define paths for Express configurations
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'weather',
        name: 'Mich'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: "Miche"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        helpMessage: "If you need any help, please contact us",
        title: "Help",
        name: "Mich"
    });
});

app.get("/weather", (req, res) => {
    res.send({
        forecast: "Sunny",
        location: "Philadelphia"
    });
});


app.listen(3000, () => {
    console.log('Server has started on PORT 3000')
})