document.getElementById('search-icon').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    // Add your API call logic here to fetch weather data for the input city
    // Update the DOM elements with the fetched data
});

// Example function to update the DOM with fetched weather data
function updateWeather(data) {
    document.getElementById('cityName').textContent = data.city;
    document.getElementById('temp').textContent = data.temp + ' °C';
    document.getElementById('condition').textContent = data.condition;
    document.getElementById('feels').textContent = data.feels_like + ' °C';
    document.getElementById('humidity').textContent = data.humidity + '%';
    document.getElementById('pressure').textContent = data.pressure + ' in';
    document.getElementById('visibility').textContent = data.visibility + ' km';
    document.getElementById('wind').textContent = data.wind_speed + ' km/h';
    // Update the 10-day forecast similarly
}
