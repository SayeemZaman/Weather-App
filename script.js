const search = $('form');

const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

async function getWeather(city) {
    try {
        const rawData = await fetch(apiUrl + `${city}&appid=${apiKey}`);
        let data = await rawData.json();
        
        setWeather(data)
    } catch (err) {
        $('#error').css('display', 'block');
        $('#error').text('Please enter a proper city name!');
    }
}
$(document).click(() => $('#error').css('display', 'none') )

function setWeather(data) {
    $('#tmp').text(data.main.temp + "C");
    $('#name').text(data.name);
}


search.submit(e => {
    e.preventDefault();
    
    const cityInput = $('#city').val().trim();
    getWeather(cityInput);
})