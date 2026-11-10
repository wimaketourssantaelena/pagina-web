import { Component, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { TestimoniosComponent } from '../../sections/testimonios/testimonios.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [TranslateModule, TestimoniosComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  activeTab = 'quienes';
  lightboxImg = signal<string | null>(null);

  openLightbox(src: string) { this.lightboxImg.set(src); }
  closeLightbox() { this.lightboxImg.set(null); }
}
