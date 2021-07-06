const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=b27caf901959760897ab73d613cb808e&units=imperial";



fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {



        let weather_description = jsObject.weather[0].description;
        var temp = parseFloat(jsObject.main.temp);
        var current = weather_description + " " + temp;

        var high = parseFloat(jsObject.main.temp_max);

        var hum = parseFloat(jsObject.main.humidity);
        var windspeed = parseFloat(jsObject.wind.speed);



        var windfactor;
        if (temp <= 50 && windspeed > 3) {
            windfactor = windChillFactor(temp, windspeed);
        } else {
            windfactor = "N/A";
        }

        document.querySelector('#current').textContent = current;
        document.querySelector('#high').textContent = high + "";
        document.querySelector('#wind').textContent = windfactor;
        document.querySelector('#humidity').textContent = hum;
        document.querySelector('#speed').textContent = windspeed;
    });


function windChillFactor(temperature, windSpeed) {
    let factor = (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16)));
    return factor;
}