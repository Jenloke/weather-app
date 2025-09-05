import { Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { IWeather } from '../../models/weather.model';

@Component({
  selector: 'app-sample-card',
  imports: [
    // DatePipe
  ],  
  templateUrl: './sample-card.html',
  styleUrl: './sample-card.css'
})
export class SampleCard {

  readonly weatherData = input<IWeather>();

  // description = computed(() => {
  //   this.weatherData()?.weather?.at(0)?.description?.toLowerCase()
  // })

  display = () => console.log(this.weatherData());

  units = {
    metric: { temperatureUnit: '°C', speedUnit: 'km/h' },
    imperial: { temperatureUnit: '°F', speedUnit: 'mp/h' },
  };

  selectedUnit: 'metric' | 'imperial' = 'metric';

  get selectedUnits() {
    return this.units[this.selectedUnit];
  }

  formatUnixToLocalTime = (unixTime: number | undefined): string => {
    if (!unixTime) return '';
    const date = new Date(unixTime * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
