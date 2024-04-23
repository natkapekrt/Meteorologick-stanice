const cities = [
    { name: "Praha", temperature: 8, weather: "oblačno" },
    { name: "Brno", temperature: 6, weather: "deštivo" },
    { name: "Ostrava", temperature: 4, weather: "mlha" },
    { name: "Litoměřice", temperature: 10, weather: "slunečno" },
    { name: "Žatec", temperature: 5, weather: "zataženo" },
    { name: "Ústí Nad Labem", temperature: 7, weather: "mlha" },
    { name: "Karlovy Vary", temperature: 11, weather: "oblačno" },
    { name: "Liberec", temperature: 9, weather: "deštivo" },
];


function displayWeather(cityName) {
    const selectedCity = cities.find(city => city.name === cityName);
    const weatherContainer = document.getElementById("weather-container");
    weatherContainer.innerHTML = `
        <h2>Počasí v ${selectedCity.name}</h2>
        <p>Teplota: ${selectedCity.temperature}°C</p>
        <p>Počasí: ${selectedCity.weather}</p>
    `;
}

const citySelector = document.getElementById("city");
cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city.name;
    option.textContent = city.name;
    citySelector.appendChild(option);
});


citySelector.addEventListener("change", () => {
    const selectedCity = citySelector.value;
    displayWeather(selectedCity);
});

const updateButton = document.getElementById("update-btn");
updateButton.addEventListener("click", () => {
    const selectedCity = citySelector.value;
    displayWeather(selectedCity);
});
