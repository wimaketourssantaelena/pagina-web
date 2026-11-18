import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToursService } from '../../services/tours.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './tour-detail.component.html',
  styleUrl: './tour-detail.component.css'
})
export class TourDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private toursService = inject(ToursService);
  langService = inject(LanguageService);

  slug = signal<string | null>(null);
  activeTab = signal('itinerario');

  // Galería general: la usan los tours que no tienen una propia
  private galeriaGeneral = [
    '/assets/img/img2.jpeg',
    '/assets/img/img1.jpeg',
    '/assets/img/img3.jpeg',
    '/assets/img/img4.jpg',
    '/assets/img/img5.jpeg'
  ];

  // Galería propia de cada tour (clave = slug del tour)
  private galerias: Record<string, string[]> = {
    'trekking-cerro-kennedy-3-dias-2-noches': [
      '/assets/galeria/amanecer.jpeg',
      '/assets/galeria/montana.jpeg',
      '/assets/galeria/cascada.jpeg',
      '/assets/galeria/columpio.jpeg',
      '/assets/galeria/arcoiris.jpeg',
      '/assets/galeria/aves.jpeg',
      '/assets/galeria/montana2.jpeg',
      '/assets/galeria/aves1.jpeg',
      '/assets/galeria/nombre.jpeg'
    ]
  };

  galeria = computed(() => this.galerias[this.slug() ?? ''] ?? this.galeriaGeneral);

  lightboxImg = signal<string | null>(null);

  openLightbox(src: string) { this.lightboxImg.set(src); }
  closeLightbox() { this.lightboxImg.set(null); }

  // Se recalcula al cambiar de tour o de idioma
  tour = computed(() => {
    const slug = this.slug();
    if (!slug) return undefined;
    return this.toursService.getTourById(slug);
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.slug.set(params['slug']);
    });
  }

  setTab(tab: string) {
    this.activeTab.set(tab);
  }
}
