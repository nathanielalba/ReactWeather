var axios = require('axios');

const BASE_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1a77594d101d0103173304c6812b68fd&units=imperial';

module.exports = {
  getTemp: function(location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${BASE_URL}&q=${encodedLocation}`

    return axios.get(requestUrl).then(function(res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
