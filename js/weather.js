var APPID = 'a90985d01382d3aec030a6fdcb74ef08';

var icon;
var description;
var city;
var high;
var current;
var low;
var humidity;
var speed;
var direction;
var rise;
var set;

function findByZip(zipCode) {
    var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + "&units=imperial" + "&APPID=" + APPID;
    callApi(url);
}

function findByCity(city) {
    var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APPID;
    callApi(url);
}

function findByCoordinates(lat, lon) {
    var url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&APPID=" + APPID;
    callApi(url);
}

function callApi(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            weather.icon = data.weather[0].icon;
            weather.description = data.weather.description;
            weather.city = data.name;
            weather.high = Math.round(data.main.temp_max);
            weather.current = Math.round(data.main.temp);
            weather.low = Math.round(data.main.temp_min);
            weather.humidity = data.main.humidity;
            weather.speed = Math.round(data.wind.speed);
            weather.direction = toDirection(data.wind.deg);
            weather.rise = sunrise(data.sys.sunrise);
            weather.set = sunset(data.sys.sunset);
            update(weather);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function sunrise(unix) {
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return hours + ':' + minutes;
}

function sunset(unix) {
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    return (hours - 12) + ':' + minutes;
}

function toDirection(degrees) {
    if (degrees >= 337 || degrees <= 22) {
        return 'N';
    }
    else if (degrees >= 23 && degrees <= 67) {
        return 'NE';
    }
    else if (degrees >= 68 && degrees <= 112) {
        return 'E';
    }
    else if (degrees >= 113 && degrees <= 157) {
        return 'SE';
    }
    else if (degrees >= 158 && degrees <= 202) {
        return 'S';
    }
    else if (degrees >= 203 && degrees <= 247) {
        return 'SW';
    }
    else if (degrees >= 248 && degrees <= 292) {
        return 'W';
    }
    else {
        return 'NW';
    }
}

function update(weather) {
    icon.src = "http://openweathermap.org/img/w/" + weather.icon + ".png";
    description = weather.description;
    city.innerHTML = weather.city;
    high.innerHTML = weather.high;
    current.innerHTML = weather.current;
    low.innerHTML = weather.low;
    humidity.innerHTML = weather.humidity;
    speed.innerHTML = weather.speed;
    direction.innerHTML = weather.direction;
    rise.innerHTML = weather.rise;
    set.innerHTML = weather.set;
}

function showPosition(position) {
    findByCoordinates(position.coords.latitude, position.coords.longitude);
}

window.onload = function() {
    icon = document.getElementById("icon");
    description = document.getElementById("description");
    city = document.getElementById("city");
    high = document.getElementById("high");
    current = document.getElementById("current");
    low = document.getElementById("low");
    humidity = document.getElementById("humidity");
    speed = document.getElementById("speed");
    direction = document.getElementById("direction");
    rise = document.getElementById("sunrise");
    set = document.getElementById("sunset");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        findByCity("philadelphia")
    }
}

$(document).ready(function() {
    $('#manualLocation').click(function() {
        $('form').fadeIn('slow');
    });
    $('#submit').on('click', function() {
        var input = $('#locationInput').val();
        if (isNaN(input)) {
            findByCity(input);
        }
        else {
            findByZip(input);
        }
        return false;
    });
});