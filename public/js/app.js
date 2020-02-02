//client side js
console.log("Client side js script is loaded")

const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchTerm.value

    fetch(`http://localhost:3000/weather?address=${location}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.location, data.forecast);
            }
        });
})