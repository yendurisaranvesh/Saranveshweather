const apiKey = "0dc231654cba5626026d7648bac26cbc";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found");
                return;
            }

            document.getElementById("weatherCard").style.display = "block";
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temperature").innerText = `🌡️ Temperature: ${data.main.temp}°C`;
            document.getElementById("condition").innerText = `☁️ Condition: ${data.weather[0].main}`;
            document.getElementById("humidity").innerText = `💧 Humidity: ${data.main.humidity}%`;
            document.getElementById("wind").innerText = `💨 Wind Speed: ${data.wind.speed} m/s`;

            const temp = data.main.temp;
            let message = "";

            if (temp > 30) {
                message = "It's hot today, stay hydrated 🥤";
            } else if (temp < 15) {
                message = "Cool weather, wear a jacket 🧥";
            } else {
                message = "Great weather to go outside 🌤️";
            }

            document.getElementById("message").innerText = message;
        })
        .catch(error => {
            alert("Error fetching data");
        });
}
