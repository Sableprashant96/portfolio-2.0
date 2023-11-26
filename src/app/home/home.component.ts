import { Component } from '@angular/core';
import { fadeInOutAnimation } from '../fade-in-out.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInOutAnimation]
})
export class HomeComponent {

}
