const urlEvents = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(urlEvents)
    .then((response) => response.json())
    .then((jsObject) => {

        console.log(jsObject);
        const eventslist = jsObject.towns[0]["events"];
        const eventdiv = document.createElement("p");
        console.log(eventslist);
        eventslist.forEach((element) => {
            var eventline = document.createElement("p");
            eventline.textContent = element;
            eventline.setAttribute("id", "eventline");
            eventdiv.appendChild(eventline);
            console.log(eventline.textContent);
        })

        let getEvent = document.getElementById("events");

        getEvent.appendChild(eventdiv);


    });