import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  imports: [HeaderComponent],
})
export class AboutComponent {}
