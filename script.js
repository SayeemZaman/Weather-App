const cityInput = document.querySelector('input').value;
const search = document.querySelector('form');

const apiKey = 'ce6556fcf4e452a207fe0735729d4b03';

async function getWeatherData(city) {
    const rawData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    let data = await rawData.json();
        
    
}