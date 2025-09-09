import { Component, effect, inject, resource, signal } from '@angular/core';
import { Weather } from '../../services/weather/weather';
import { SampleCard } from '../../components/sample-card/sample-card';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorCard } from "../../components/error-card/error-card";
import { RecentSearches } from "../../components/recent-searches/recent-searches";

type UnitSystem= 'metric' | 'imperial';
type Search = { city: string; temp: number; unit: string };

@Component({
  selector: 'app-home',
  imports: [
    SampleCard,
    CommonModule,
    ReactiveFormsModule,
    ErrorCard,
    RecentSearches
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // constructor() {
  //   // Auto-save whenever recentSearches changes
  //   effect(() => {
  //     localStorage.setItem('recentSearches', JSON.stringify(this.recentSearches()));
  //   });
  // }

  units = ['metric', 'imperial']

  form = new FormGroup({
    city: new FormControl(''),
    unit: new FormControl('metric')
  })

  //injector
  private readonly weatherService = inject(Weather);
  //signals
  inputCity = signal('Bauan');
  inputUnit = signal<UnitSystem>('metric');

  public weatherDataResource = resource({
    params: () => ({city: this.inputCity(), unit: this.inputUnit()}),
    loader: async ({params}) => (
      this.weatherService.getWeather(params.city, params.unit)
    ),
  });

  onSubmit = () => {
    this.inputCity.set(this.form.value.city || '');
    this.inputUnit.set(this.form.value.unit as UnitSystem || 'metric');

    this.recents.set(true);
  }

  // private loadFromLocalStorage(): Search[] {
  //   const saved = localStorage.getItem('recentSearches');
  //   return saved ? JSON.parse(saved) : [];
  // }

  recents = signal(false)
  cap = 3
  // recentSearches = signal<Search[]>(this.loadFromLocalStorage())
  recentSearches = signal<Search[]>([])

  log_search = effect(() => {
    if (this.recents () === false) return;
    if (!this.weatherDataResource.value()) return;

    const city: string | undefined = this.weatherDataResource.value()?.name
    const temp: number | undefined = this.weatherDataResource.value()?.main?.temp
    const unit: string | undefined = this.inputUnit()
    if (!city|| !temp || !unit) return;
    this.addSearch(city, temp, unit);
  })
  
  addSearch = (city: string, temp: number, unit: string) => {
    this.recentSearches.update(arr => {
      const exists = arr.some(entry => entry.city.toLowerCase() === city.toLowerCase());
      if (exists) return arr; // do nothing if already there

      let updated = [...arr, { city, temp, unit }];

      // if over cap, drop the oldest (first) entry
      if (updated.length > this.cap) {
        updated = updated.slice(updated.length - this.cap);
      }

      return updated;
    });
  }
}
