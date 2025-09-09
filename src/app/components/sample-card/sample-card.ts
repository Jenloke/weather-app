import { Component, computed, effect, input, Input, Signal } from '@angular/core';
import { IWeather } from '../../models/weather.model';

@Component({
  selector: 'app-sample-card',
  imports: [],  
  templateUrl: './sample-card.html',
  styleUrl: './sample-card.css'
})
export class SampleCard {

  readonly weatherData = input<IWeather>();

  data = computed(() => this.weatherData());

  // @Input() displayUnit!: Signal<'metric' | 'imperial'>;
  @Input() displayUnit!: any;
  selectedUnit: 'metric' | 'imperial' = this.displayUnit;

  // description = computed(() => {
  //   this.weatherData()?.weather?.at(0)?.description?.toLowerCase()
  // })

  e = effect(() => {
    this.selectedUnit = this.displayUnit;
  })
  get selectedUnits() {
    return this.units[this.selectedUnit];
  }

  units = {
    metric: { temperatureUnit: '°C', speedUnit: 'km/h' },
    imperial: { temperatureUnit: '°F', speedUnit: 'mp/h' },
  };

  formatTime(unixUtc?: number, timezone?: number): string {
  if (!unixUtc || timezone === undefined) return '';
  // unixUtc is sunrise/sunset, timezone is offset in seconds
  const date = new Date((unixUtc + timezone) * 1000);

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();

  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  return `${hours}:${minutesStr} ${ampm}`;
}
}
