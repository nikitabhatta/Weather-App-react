import useWeather from "../useWeather";
import { useForm } from "react-hook-form";

function Weather() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const {
        weather,
        searchWeather,
        isLoading,
        isError,
        error } = useWeather();
    function handleSearch(data) {
        const cityName = data.city.trim();

        searchWeather(cityName);
    }

    return (
        <div className="card">
            <h1 className="title">Weather App</h1>
            <form
                className="search"
                onSubmit={handleSubmit(handleSearch)}>
                <input type="text" placeholder="Enter City Name"
                    {...register("city", {
                        required: "Please enter a city name"
                    })}
                />
                <button type="submit">
                    <img src="/images/search.png" className="search-icon"
                    />
                </button>
            </form>
            {errors.city && (
                <p className="error"> {errors.city.message}</p>
            )}
            {isLoading && (
                <p className="message"> Loading weather...</p>
            )}
            {isError && (
                <p className="error"> {error.response?.data?.message || "Something went wrong"}</p>
            )}
            {weather && (
                <div className="weather">
                    <img src="/images/weather.png" className="weather-icon"
                    />
                    <h1 className="temperature">
                        {Math.round(weather.main.temp)}°C</h1>
                    <h2 className="city">{weather.name}</h2>

                    <p className="description">
                        {weather.weather[0].main}</p>

                    <div className="range">
                        <span className="maximum-temp">
                            H: {Math.round(weather.main.temp_max)}°C </span>
                        <span className="minimum-temp">
                            L: {Math.round(weather.main.temp_min)}°C
                        </span>
                    </div>
                    <div className="details">
                        <div className="col">
                            <img src="/images/humidity.png" />
                            <div>
                                <p className="humidity">
                                    {weather.main.humidity}% </p>
                                <p>Humidity</p>
                            </div>
                        </div>
                        <div className="col">
                            <img src="/images/wind.png" />
                            <div>
                                <p className="wind">{weather.wind.speed} km/h </p>
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