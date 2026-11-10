import { Component, inject } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-section-contacto',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  langService = inject(LanguageService);

  enviarWA(nombre: string, tour: string) {
    const text = this.langService.currentLang() === 'en'
      ? `Hello Wi Make Tours Santa Elena! 👋 I am ${nombre || 'Visitor'} and I would like information about: ${tour || 'a tour'}`
      : `Hola Wi Make Tours Santa Elena! 👋 Soy ${nombre || 'Visitante'} y quiero información sobre: ${tour || 'un tour'}`;
    window.open('https://wa.me/573114054907?text=' + encodeURIComponent(text), '_blank');
  }
}
