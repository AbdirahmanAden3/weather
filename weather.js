let time = document.getElementById('time');
let day = document.getElementById('day');






setInterval(function () {

    let d = new Date();
    d.innerHTML = d.getFullYear
 
    

    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    day.innerHTML = days[d.getDay()];
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
let weatherIcon  =  document.getElementById('image');
let feel      =    document.getElementById('feel');
let wind      =    document.getElementById('wind');
let pressure      = document.getElementById('pressure');
let humidity  =    document.getElementById('humidity');
let desc      =    document.getElementById('desc');
let title      =    document.getElementById('title');
let images = document.getElementById('images');


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
        feel.innerHTML =  data.main.feels_like + "°C" 
        img.innerHTML =  data.wind.deg + "°/"
        weatherIcon.src =  data.weather[0].icon
        wind.innerHTML =  data.wind.speed+"mp/h"
        pressure.innerHTML =  data.main.pressure+"in"
        humidity.innerHTML =  data.main.humidity+"%"
        desc.innerHTML =  data.weather[0].description
        title.innerHTML =  data.weather[0].main
        images.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        
        console.log(data);
        
        
    
        
        // return
        temp.innerHTML =  data.main?.temp + " " + "°/C"; 

        displayWeather(data);



    }).catch(err => console.log(err));

} 



function displayWeather(data) {
    // Display the fetched weather data

      
    temp.innerHTML = `${data.main.temp} °/C`;
    // weatherDescription.innerHTML = data.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  
    // console.log(weatherIcon)
 
    // console.log(weatherIcon);
    // feelLike.forEach(feel => {
    //     feel.innerHTML = `${data.main.feels_like} °C`;
    // });

}
console.log("hello");
// console.log(displayWeather("garowe"));
// displayWeather("garowe");





//   get("garowe")
    
  
    // let Apike  =    `2185595cc307fea49894a72dd004af2b`;
    // // let ur   =     `api.openweathermap.org/data/2.5/forecast?q=${ff}&appid=${Apike}&units=metric`;
    // let ur   =     `api.openweathermap.org/data/2.5/forecast?q=bosaso&appid=2185595cc307fea49894a72dd004af2b&units=metric`;


    // fetch(ur).then(res => res.json())
    // .then(data => {
    //     console.log(data, "dffffff");
    // })

//     const ur = `https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=f57ae619e2b74032834e1605d99d1a58`;

// fetch(ur)
//   .then(res => {
//     if (!res.ok) {
//       throw new Error('Network response was not ok ' + res.statusText);
//     }
//     return res.json();
//   })
//   .then(data => {
//     console.log(data, "dffffff");
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });


//   let getdate = async()=>{
//     let  request = await fetch()
//      const response = await request.json();
//      return response
//   }
 
//   getdate().then(data =>{
//     console.log(data);

//   }).catch(err => console.log(err));
  
   
// // console.log(hh());

//     //  let showDate = document.getElementById('weathr');

//     //     // let c =  `
//     //     // <h2>${city.name}</h2>
//     //     // <h2>${temp.main}</h2>


//     //     // `;

//     //     // c.innerHTML = c;
