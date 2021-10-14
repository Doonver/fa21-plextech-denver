const API_KEY = '71f6d0d7e5a7d8cbf4f46f58c26d4f1d';
const CITY_NAME = 'San Diego';
const loc = document.querySelector('#location');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const rise = document.querySelector('.sunrise');
const down = document.querySelector('.sundown');
const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`;


window.addEventListener('load', () => {
fetch(url)
    .then((response) => {
        return response.json();
    })
    .then(data => {
        console.log(data)
        let { temp } = data.main;
        temp = ((9/5) * (temp - 273) + 32).toFixed(1)
        const city = data.name;
        const { description } = data.weather[0];
        const { speed } = data.wind;
        const { sunrise, sunset } =  data.sys;
        
        const sunriseChanged = new Date(sunrise * 1000);
        const sunsetChanged = new Date(sunset * 1000);
        
        loc.textContent = `${city}`
        desc.textContent = `${description}`
        tempF.textContent = `${temp} °F`
        rise.textContent = `${sunriseChanged.toLocaleTimeString()}`
        down.textContent = `${sunsetChanged.toLocaleTimeString()}`

// do something with data
    })  
})

