let time = document.getElementById('time');
setInterval(function () {
    let d = new Date();
    time.innerHTML = d.toLocaleTimeString();
  
   
}, 1000);

// setInterval(displayClock);

// function displayClock() {
//     time.innerHTML = new Date().toLocaleTimeString();
//     date.innerHTML = new Date().toLocaleDateString();
// }




let search    =    document.querySelector('#search');
let city      =    document.querySelector('.garowe');
let temp      =    document.querySelector('.temp');
let humidity  =    document.querySelector('.humid');
let wind      =    document.querySelector('.wind');
let weather   =    document.querySelector('.weather');

search.addEventListener('keyup', (e) => {
        if(e.keyCode === 3) {
            getWeather(search.value);
        }
    });



let Apikey  =  `1763695b35d9f890e75e4477403a7872`;


const url   =  `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={Apikey}&units=metric`;

async function getWeather(city) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    city.innerHTML = data.name;
    temp.innerHTML = data.main.temp;
    humidity.innerHTML = data.main.humidity;
    wind.innerHTML = data.wind.speed;
    weather.innerHTML = data.weather[0].main;
    
}

getWeather([city]);


 










