import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-conversion-calculator',
  templateUrl: './conversion-calculator.component.html',
  styleUrl: './conversion-calculator.component.scss',
  imports: [FormsModule, HeaderComponent],
})
export class ConversionCalculatorComponent {
  celcius = 0;
  fahrenheit = 32;
  meter = 0;
  foot = 0;

  convertCelcius(fahrenheit: number) {
    this.celcius = (fahrenheit - 32) * (5 / 9);
  }
  convertFahrenheit(celcius: number) {
    this.fahrenheit = celcius * (9 / 5) + 32;
  }
  convertMeter(foot: number) {
    this.meter = foot / 3.281;
  }
  convertFoot(meter: number) {
    this.foot = meter * 3.281;
  }
}
