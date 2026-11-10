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

  galeria = [
    '/assets/galeria/amanecer.jpeg',
    '/assets/galeria/montana.jpeg',
    '/assets/galeria/cascada.jpeg',
    '/assets/galeria/columpio.jpeg',
    '/assets/galeria/arcoiris.jpeg',
    '/assets/galeria/aves.jpeg',
    '/assets/galeria/montana2.jpeg',
    '/assets/galeria/aves1.jpeg',
    '/assets/galeria/nombre.jpeg'
  ];

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
