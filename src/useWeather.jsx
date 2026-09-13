import { useState } from "react";

function useWeather() {
    const [weather, setWeather] = useState(null);

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    async function searchWeather(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        console.log(data);

        setWeather(data);
    }

    return {
        weather, searchWeather
    };
}

export default useWeather;