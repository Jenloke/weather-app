export interface IWeather {
    coord: Coordinates;
    weather: WeatherDetails[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    rain: any;
    clouds: any;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
    unit: 'metric' | 'imperial';
}

export interface Coordinates{
    lon: number;
    lat: number;
}

export interface WeatherDetails {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Main{
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
}

export interface Wind{
    speed: number;
    deg: number;
}

export interface Sys {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
}