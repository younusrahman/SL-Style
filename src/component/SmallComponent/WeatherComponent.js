import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

export default function WeatherComponent() {
    return (
        <Stack sx={{ width: "40vw" }} direction="column" alignItems="flex-end">
            <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
            {`${WeatherInfo.main.temp.toString().slice(0, 2)} °C`}
                
            </Typography>
            <Typography sx={{ fontSize: "18px", fontWeight: "bold", display: "flex", alignItems:"center" }}>
                <img
                    width="35px"
                    height="auto"
                    src={`https://openweathermap.org/img/wn/${WeatherInfo.weather[0].icon}.png`}
                    alt="Weathericon"
                />
                {WeatherInfo.weather[0].description}
            </Typography>
            <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
             
                {`Feels like ${WeatherInfo.main.temp.toString().slice(0, 2)} °C`}
                
            </Typography>

        </Stack>
    )
}





const WeatherInfo = {
    "coord": {
        "lon": 18.1495,
        "lat": 59.2139
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 29.21,
        "feels_like": 29.34,
        "temp_min": 28.39,
        "temp_max": 29.95,
        "pressure": 1013,
        "humidity": 45
    },
    "visibility": 10000,
    "wind": {
        "speed": 5.66,
        "deg": 130
    },
    "clouds": {
        "all": 0
    },
    "dt": 1660919715,
    "sys": {
        "type": 1,
        "id": 1788,
        "country": "SE",
        "sunrise": 1660878856,
        "sunset": 1660933693
    },
    "timezone": 7200,
    "id": 2707952,
    "name": "Haninge Municipality",
    "cod": 200
}