import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [HeaderComponent],
})
export class HomeComponent {}
