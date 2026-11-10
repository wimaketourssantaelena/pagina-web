import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-section-agency-info',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './agency-info.component.html',
  styleUrl: './agency-info.component.css'
})
export class AgencyInfoComponent {}
