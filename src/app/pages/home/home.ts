import { Component, inject, OnInit, output, resource, signal } from '@angular/core';
import { Weather } from '../../services/weather/weather';
import { SampleCard } from '../../components/sample-card/sample-card';

import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ErrorCard } from "../../components/error-card/error-card";

type UnitSystem= 'metric' | 'imperial';

@Component({
  selector: 'app-home',
  imports: [
    SampleCard,
    CommonModule,
    ReactiveFormsModule,
    ErrorCard
],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
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
    loader: async ({params}) => (this.weatherService.getWeather(params.city, params.unit)),
  });

  onSubmit = () => {
    this.inputCity.set(this.form.value.city || '');
    this.inputUnit.set(this.form.value.unit as UnitSystem || 'metric');
  }

}
