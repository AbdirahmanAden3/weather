let time = document.getElementById('time');
let day = document.getElementById('day');
let today = new Date();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


setInterval(function () {
    


    let d = new Date();
    day.innerHTML = d.toLocaleDateString();

    time.innerHTML = d.toLocaleTimeString();
    
  
   
}, 1000);

// setInterval(displayClock);

// function displayClock() {
//     time.innerHTML = new Date().toLocaleTimeString();
//     date.innerHTML = new Date().toLocaleDateString();
// }




let search    =    document.getElementById('search');
let city      =    document.getElementById('city');
let city1      =    document.getElementById('city1');
let temp      =    document.getElementById('temp');
// let humidity  =    document.querySelector('.humid');

let weather   =    document.querySelector('.weather');
let img    =     document.getElementById('wind');
let weatherIcon    =     document.getElementById('image');
let feel      =    document.getElementById('feel');
let wind      =    document.getElementById('wind');
let pressure      =    document.getElementById('pressure');
let humidity  =    document.getElementById('humidity');
let desc      =    document.getElementById('desc');
let title      =    document.getElementById('title');

search.addEventListener('click', () => {
    
    let address = city.value;
    get(address);

    city1.innerHTML =  city.value;
   
   
    

});

    // return

    // getLocation_address(city.value)

    // // getLocation_address(city.value)

   function get(address){
    let Apikey =  `2f745fa85d563da5adb87b6cd4b81caf`;
    let  url  =   `https://api.openweathermap.org/data/2.5/weather?q=${address}&appid=${Apikey}&units=metric`;


    fetch(url).then(res => res.json()).then(data=>{

   
        feel.innerHTML =  data.main.feels_like 
        wind.innerHTML =  data.wind.speed+"mph"
        pressure.innerHTML =  data.main.pressure+"in"
        humidity.innerHTML =  data.main.humidity+"%"
        desc.innerHTML =  data.weather[0].description
        title.innerHTML =  data.weather[0].main
        
        
    
        
        // return
        temp.innerHTML =  data.main?.temp + " " + "°/C"; 

        displayWeather(data);


    }).catch(err => console.log(err));

} 

function displayWeather(data) {
    // Display the fetched weather data
      console.log(data);
 
    temp.innerHTML = `${data.main.temp} °/C`;
    // weatherDescription.innerHTML = data.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    console.log(weatherIcon)
 
    // console.log(weatherIcon);
    // feelLike.forEach(feel => {
    //     feel.innerHTML = `${data.main.feels_like} °C`;
    // });

}


  get("garowe")


  





    //  let showDate = document.getElementById('weathr');

    //     // let c =  `
    //     // <h2>${city.name}</h2>
    //     // <h2>${temp.main}</h2>


    //     // `;

    //     // c.innerHTML = c;
