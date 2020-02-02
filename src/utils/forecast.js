const request = require('request')

const forecast = (lat, long, callback) => {
    const url = `https://api.darksky.net/forecast/3ff4d2a990752fe3b6f00446000da200/${lat},${long}`;

    request({ url, json: true }, (error, response, body) => {
        if (error) {
            callback("Unable to connect to weather service");
        } else if (body.error) {
            callback("Unable to find location. Please try another location");
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is currently ${body.currently.temperature}. There is a ${body.currently.precipProbability}% chance of rain`);
        }
    });
};

module.exports = forecast