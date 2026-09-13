import { useState } from "react";
import useWeather from "../useWeather";

function Weather() {
    const [cityInput, setCityInput] = useState("");

    const {
        weather,
        searchWeather
    } = useWeather();

    function handleSearch() {
        const cityName = cityInput.trim();

        if (cityName === "") {
            alert("Please enter a city name");
            return;
        }

        searchWeather(cityName);
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <div className="card">

            <h1 className="title">Weather App</h1>

            <div className="search">

                <input
                    type="text"
                    placeholder="Enter City Name"
                    value={cityInput}
                    onChange={(event) => setCityInput(event.target.value)}
                    onKeyDown={handleKeyPress}
                />

                <button onClick={handleSearch}>
                    <img
                        src="/images/search.png"
                        className="search-icon"
                    />
                </button>

            </div>

            {weather && (
                <div className="weather">

                    <img
                        src="/images/weather.png"
                        className="weather-icon"
                    />

                    <h1 className="temperature">
                        {Math.round(weather.main.temp)}°C
                    </h1>

                    <h2 className="city">
                        {weather.name}
                    </h2>

                    <p className="description">
                        {weather.weather[0].main}
                    </p>

                    <div className="range">
                        <span className="maximum-temp">
                            H: {Math.round(weather.main.temp_max)}°C
                        </span>

                        <span className="minimum-temp">
                            L: {Math.round(weather.main.temp_min)}°C
                        </span>
                    </div>

                    <div className="details">

                        <div className="col">

                            <img src="/images/humidity.png" />

                            <div>
                                <p className="humidity">
                                    {weather.main.humidity}%
                                </p>

                                <p>Humidity</p>
                            </div>

                        </div>

                        <div className="col">

                            <img src="/images/wind.png" />

                            <div>
                                <p className="wind">
                                    {weather.wind.speed} km/h
                                </p>

                                <p>Wind Speed</p>
                            </div>

                        </div>

                    </div>

                </div>
            )}

        </div>
    );
}

export default Weather;