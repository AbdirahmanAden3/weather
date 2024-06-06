const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const googleImagesApiKey = 'YOUR_GOOGLE_IMAGES_API_KEY';

$(document).ready(function() {
    $('#get-weather').click(function(event) {
        event.preventDefault();
        const city = $('#city').val();
        getWeather(city);
    });
});

function getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
            const weatherData = data.weather[0];
            const iconCode = weatherData.icon;
            const temperature = data.main.temp;
            const cityName = data.name;

            getWeatherIcon(iconCode, function(iconUrl) {
                $('#weather-icon').attr('src', iconUrl);
            });

            $('#city-name').text(cityName);
            $('#weather-condition').text(weatherData.description);
            $('#temperature').text(`Temperature: ${temperature}°C`);
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
    });
}

function getWeatherIcon(iconCode, callback) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${googleImagesApiKey}&cx=013036536707430787575:qggnlpqyf0m&q=weather+${iconCode}&searchType=image`;
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
            const imageUrl = data.items[0].link;
            callback(imageUrl);
        },
        error: function(xhr, status, error) {
            console.log(error);
        }
    });
}