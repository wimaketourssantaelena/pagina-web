import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ToursService, Tour } from '../../services/tours.service';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-section-tours',
  standalone: true,
  imports: [RouterLink, TranslateModule],
  templateUrl: './tours.component.html',
  styleUrl: './tours.component.css'
})
export class ToursComponent implements OnInit, OnDestroy {
  private toursService = inject(ToursService);
  currentFilter = 'todos';

  // Fotos del mini carrusel de cada tarjeta
  tourImages: Record<string, string[]> = {
    'trekking-cerro-kennedy-2-dias-1-noche': [
      '/assets/carucel-de-card/kennedy-2d/1.jpeg',
      '/assets/carucel-de-card/kennedy-2d/2.jpeg',
      '/assets/carucel-de-card/kennedy-2d/3.jpeg'
    ],
    'trekking-cerro-kennedy-3-dias-2-noches': [
      '/assets/carucel-de-card/kennedy-3d/1.jpeg',
      '/assets/carucel-de-card/kennedy-3d/2.jpeg',
      '/assets/carucel-de-card/kennedy-3d/3.jpeg'
    ],
    'full-day-trekking-cerro-kennedy': [
      '/assets/carucel-de-card/kennedy-extremo/1.jpeg',
      '/assets/carucel-de-card/kennedy-extremo/2.jpeg',
      '/assets/carucel-de-card/kennedy-extremo/3.jpeg'
    ]
  };

  cardSlides: Record<string, number> = {
    'trekking-cerro-kennedy-2-dias-1-noche': 0,
    'trekking-cerro-kennedy-3-dias-2-noches': 0,
    'full-day-trekking-cerro-kennedy': 0
  };

  private intervalId: any;

  // Tours que se muestran en la portada
  visibleTourIds = [
    'trekking-cerro-kennedy-2-dias-1-noche',
    'trekking-cerro-kennedy-3-dias-2-noches',
    'full-day-trekking-cerro-kennedy'
  ];

  get filteredTours(): Tour[] {
    const visibles = this.toursService.getAll().filter(t => this.visibleTourIds.includes(t.id));
    return this.currentFilter === 'todos'
      ? visibles
      : visibles.filter(t => t.cat === this.currentFilter);
  }

  hasCarousel(id: string): boolean {
    return id in this.tourImages;
  }

  getImages(id: string): string[] {
    return this.tourImages[id] ?? [];
  }

  getSlide(id: string): number {
    return this.cardSlides[id] ?? 0;
  }

  filtrar(cat: string) { this.currentFilter = cat; }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      for (const id of Object.keys(this.tourImages)) {
        const imgs = this.tourImages[id];
        this.cardSlides[id] = (this.cardSlides[id] + 1) % imgs.length;
      }
    }, 3000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
