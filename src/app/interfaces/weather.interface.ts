export interface IWeatherService {
    getWeather(city: string, unit: string): Promise<any>;
}
