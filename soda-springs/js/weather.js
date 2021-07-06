const xapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&appid=b27caf901959760897ab73d613cb808e&units=imperial";

var fiveDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

fetch(xapiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const weatherlist = jsObject['list'];

        var count = 0;
        weatherlist.forEach(element => {
            if (element.dt_txt != null && element.dt_txt != undefined && element.dt_txt.includes("18:00")) {
                var dateWeather = new Date(element.dt_txt);
                var dName = fiveDays[dateWeather.getDay()];
                var dTemp = Math.round(element.main.temp);
                var icon = element.weather[0].icon;
                var iconurl = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
                count++;

                let section = document.createElement("div");
                section.setAttribute("id", "day-" + count);
                section.setAttribute("class", "dayweather");

                let name = document.createElement("p");
                name.setAttribute("id", "weatherDayName");
                name.textContent = dName;


                let img = document.createElement("img");
                img.setAttribute("id", "dayWeatherImg")
                img.setAttribute("src", iconurl);
                img.setAttribute("alt", dName);

                let dayTemp = document.createElement("p");
                dayTemp.setAttribute("id", "dayTemp");
                dayTemp.textContent = dTemp + "ºF";

                section.appendChild(name);
                section.appendChild(img);
                section.appendChild(dayTemp);

                let fiveDaysForecast = document.getElementById("fivedays");
                fiveDaysForecast.appendChild(section);
            }
        });
    })