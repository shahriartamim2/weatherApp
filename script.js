const apiKey = "87fa9ea5bb0569590bef13fd3f5a00ba";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".btn button")

const weatherIcon = document.querySelector(".sky img")
async function checkWeather(city){
    const response = await fetch(apiUrl +city+`&appid=${apiKey}` );
    let data = await response.json();
    console.log(data);

    document.getElementById("city").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.floor(data.main.temp) + "°C";
    document.getElementById("humiPrcnt").innerHTML = data.main.humidity +"%";
    document.getElementById("windSpeed").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src="images/snow.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="images/mist.png"
    }
}


searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})



