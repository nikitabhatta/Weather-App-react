import { useState } from "react";
import axios from "axios";

function useWeather() {
    const [weather, setWeather] = useState(null);
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

    async function searchWeather(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
        try {
            const response = await axios.get(url);

            console.log(response.data);

            setWeather(response.data);
        } catch (error) {
            alert(error.response?.data?.message || "Something went wrong");
        }
    }
    return {
        weather,
        searchWeather
    };
}
export default useWeather;