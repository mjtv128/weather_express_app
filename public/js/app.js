//client side js
console.log("Client side js script is loaded")

fetch("http://puzzle.mead.io/puzzle")
    .then(res => res.json())
    .then(data => console.log(data));

const url = "http://localhost:3000/weather?address=!";

fetch(url)
    .then(res => res.json())
    .then(data => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location, data.forecast)
        }
    })