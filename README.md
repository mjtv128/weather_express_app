Weather App
---
https://mtv-weather-app.herokuapp.com/


run ```npm install``` then ```nodemon src/app.js```

A web application that gives the weather forecast based on your location input.

The front end in the browser asks for the user to provide a location.
Node js communicates with 2 external APIs : a location based API (Mapbox) and a real time weather API (Dark Sky) to convert the user's location to a weather forecast. 

The server side sends forecast back to browser so data is rendered for user to see. 

