import { Component } from '@angular/core';
import { HeroComponent }        from '../../sections/hero/hero.component';
import { ToursComponent }       from '../../sections/tours/tours.component';
import { DestinosComponent }    from '../../sections/destinos/destinos.component';
import { AgencyInfoComponent } from '../../sections/agency-info/agency-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ToursComponent,
    DestinosComponent,
    AgencyInfoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
