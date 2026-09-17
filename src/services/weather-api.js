import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
export async function getWeather(cityName) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
}