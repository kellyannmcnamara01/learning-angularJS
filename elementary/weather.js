
window.onload = function() {
    //var to hold apikey
    var appId = "cfbb6ba6f4e06d702566172de276d19d";

    //create var for each element
    var icon = document.getElementById('icon');
    var location = document.getElementById('location');
    var temp = document.getElementById('temp');
    var hum = document.getElementById('hum');
    var wind = document.getElementById('wind');

    //city/location
    //var city = "NewYork";

    //update the weather
    function update(weather) {
        icon.src = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        location.innerHTML = weather.location;
        temp.innerHTML = weather.temp;
        hum.innerHTML = weather.hum;
        wind.innerHTML = weather.wind;
    }

    //create a function that will allow the user to enter their postal city
    function updateByCity() {
        //var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=cfbb6ba6f4e06d702566172de276d19d";

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=cfbb6ba6f4e06d702566172de276d19d";
        sendRequest(url);
    }

    function updateByGeo(lat, lon){
        var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=cfbb6ba6f4e06d702566172de276d19d";
        sendRequest(url);
    }

    //sendRequest
    function sendRequest(url) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
                var data = JSON.parse(xmlhttp.responseText);
                var weather = {};
                weather.icon = data.weather[0].icon;
                weather.location = data.name;
                weather.temp = K2C(data.main.temp);
                weather.hum = data.main.humidity;
                weather.wind = data.wind.speed;

                //weather.icon = 600 ? weather.icon = "13d" : weather.icon = data.weather[0].id;
                console.log(weather.icon);

                update(weather);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    //function to convert kelvin to C
    function K2C(k) {
        return Math.round(k - 273.15);
    }

    //function to convert k to f
    function K2F(k) {
        return Math.round(k*(9/5)-459.67);
    }

    //get position
    function showPosition(position) {
        updateByGeo(position.coords.latitude, position.coords.longitude);
    }

    if(!navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        var city = window.prompt('what city are you in?');
        //updateByCity
        updateByCity();
    }


}
