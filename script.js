const search = $('form');

const apiKey = 'ce6556fcf4e452a207fe0735729d4b03';
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

function setWeather(data) {
    $('#tmp').text(data.main.temp + "C");
    $('#name').text(data.name);
}


search.submit(e => {
    e.preventDefault();
    
    const cityInput = $('#city').val().trim();
    getWeather(cityInput);
})