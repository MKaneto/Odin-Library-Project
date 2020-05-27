// api key = 82005d27a116c2880c8f0fcb866998a0;

//SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temp-value p");
const descElement = document.querySelector(".temp-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const city = document.getElementById("city").value;
const search = document.getElementById("search");


// API KEY
const key = "6e0641b2b070413b9e9144358202105";

// APP DATA
const weather = {};

weather.temperature = {};

//GET WEATHER FROM API
function getWeather() {

    const city = document.getElementById("city").value;
    let api = `http://api.weatherapi.com/v1/current.json?key=6e0641b2b070413b9e9144358202105&q=${city}`;

    console.log(api);

    fetch(api)
  
                .then(function(response){
                    let data = response.json();
                    return data;
                })                 
                    .then(function(data){
                        weather.city = data.location.name;
                        weather.country = data.location.country;
                        weather.description = data.current.condition.text;
                        weather.icon = data.current.condition.icon;
                        weather.temperature.celcius = data.current.temp_c;
                        weather.temperature.farenheiht = data.current.temp_f;
                        console.log(data);
                    }) 
                        .then (function(){
                            displayWeather();
                        });

}


// DISPLAY WEATHER TO UI
function displayWeather() {
    
    const city = document.getElementById("city").value;
    iconElement.innerHTML = `<img src="http:${weather.icon}">`;
    tempElement.innerHTML = `${weather.temperature.celcius}°C`;
    descElement.innerHTML = `${weather.description}`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;

    document.getElementById("city").value = " ";
    
}

function pointer(){
    if(tempElement.innerHTML == `-`){ }   
    else {tempElement.style.cursor = "pointer";}   
}


function change(){
        if(tempElement.innerHTML == `-`){ }   
        else if (tempElement.innerHTML == `${weather.temperature.celcius}°C`) {
                 tempElement.innerHTML = `${weather.temperature.farenheiht}°F`;
        }   else {
                 tempElement.innerHTML = `${weather.temperature.celcius}°C`;
        }
}