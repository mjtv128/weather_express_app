const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoidGVybWluYWwxMjM0IiwiYSI6ImNrNXpqZ3E5czFpYTUzZ3BvbDRjZWxsMGwifQ.XVAbSXiwYCLUjibRE2wvrQ&limit=1`;

  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callback("Unable to connect to location services");
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        long: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode
