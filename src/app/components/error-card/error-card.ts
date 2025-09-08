import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-card',
  imports: [],
  templateUrl: './error-card.html',
  styleUrl: './error-card.css'
})
export class ErrorCard {
  readonly errorMessage = input<string>();
}
