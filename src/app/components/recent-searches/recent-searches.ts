import { Component, Input, Signal } from '@angular/core';

type Search = { city: string; temp: number; unit: string };

@Component({
  selector: 'app-recent-searches',
  imports: [],
  templateUrl: './recent-searches.html',
  styleUrl: './recent-searches.css'
})
export class RecentSearches {
  @Input() recentSearches!: Signal<Search[]>;
  @Input() displayUnit!: any;
  
  convertTemp(temp: number, originalUnit: string, displayUnit: string): string {
    // console.log({temp, originalUnit, displayUnit})
    if (displayUnit == 'imperial' && originalUnit == 'metric') {
      return `${(temp * 9/5 + 32).toFixed(2)} °F`;
    }
    if (displayUnit == 'metric' && originalUnit == 'imperial') {
      return `${((temp - 32) * 5/9).toFixed(2)} °C`;
    }
    return `${temp} °${displayUnit == 'metric' ? 'C' : 'F'}`;
  }
}
