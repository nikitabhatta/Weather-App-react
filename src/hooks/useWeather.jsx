import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../services/weather-api";

function useWeather() {
    const [city, setCity] = useState("");
    const {
        data: weather,
        isLoading,
        isError,
        error,
        refetch } = useQuery({
            queryKey: ["weather", city],
            queryFn: () => getWeather(city),
            enabled: false
        });
    async function searchWeather(cityName) {
        setCity(cityName);
        await refetch({
            queryKey: ["weather", cityName]
        });
    }
    return {
        weather, searchWeather, isLoading, isError, error
    };
}
export default useWeather;