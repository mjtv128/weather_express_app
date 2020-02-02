//client side js
console.log("Client side js script is loaded")

const weatherForm = document.querySelector('form')
const searchTerm = document.querySelector('input')
const messageOne = document.querySelector('#message1')
const messageTwo = document.querySelector("#message2");


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchTerm.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ''

    fetch(`/weather?address=${location}`)
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.forecast
            }
        });
})