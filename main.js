// globe variavble initialization
let placebox = document.getElementById("placebox");
let temp = document.getElementById("temp");
let cityname = document.getElementById("city-name");
let humidity = document.getElementById("humidityH");
let wind = document.getElementById("windH");

// async code
function getweather() {
    axios.get("http://api.weatherapi.com/v1/current.json?key=1f5026b461944d8e96c135427232011&q=" + placebox.value + "&aqi=no")
        .then(function (resolve) {
            temp.innerText = resolve.data.current.temp_c;
            cityname.innerText = placebox.value;
            humidity.innerText = resolve.data.current.humidity;
            wind.innerText = resolve.data.current.wind_kph;
            console.log(resolve.data);
        })
}