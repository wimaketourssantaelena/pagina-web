import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ToursService } from './tours.service';

const SITE = 'https://wimaketoursantaelena.com';
const BRAND = 'Wi Make Tours Santa Elena';

const HOME = {
  title: `${BRAND} – Trekking Cerro Kennedy, Sierra Nevada de Santa Marta`,
  description:
    'Agencia de viajes y tour operador en Santa Marta (RNT 280360). Trekking al Cerro Kennedy, Ciudad Perdida, San Lorenzo y La Guajira con guías campesinos y nativos de la Sierra Nevada.'
};

const PAGES: Record<string, { title: string; description: string }> = {
  '/quienes-somos': {
    title: `Quiénes somos – ${BRAND}`,
    description:
      'Conoce la historia, el fundador, la misión y los valores de Wi Make Tours Santa Elena, tour operador de la Sierra Nevada de Santa Marta con RNT 280360.'
  },
  '/contacto': {
    title: `Contacto y reservas – ${BRAND}`,
    description:
      'Escríbenos por WhatsApp al +57 311 4054907 o al correo wimaketourssantaelena@gmail.com y planea tu tour en la Sierra Nevada de Santa Marta.'
  }
};

/** Actualiza título, descripción y URL canónica en cada navegación. */
@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private title = inject(Title);
  private meta = inject(Meta);
  private doc = inject(DOCUMENT);
  private tours = inject(ToursService);

  init() {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => this.apply(e.urlAfterRedirects.split(/[?#]/)[0] || '/'));
  }

  private apply(path: string) {
    let page = PAGES[path] ?? HOME;

    const tourMatch = path.match(/^\/tour\/([^/]+)$/);
    const tour = tourMatch ? this.tours.getTourById(tourMatch[1]) : undefined;
    if (tour) {
      page = {
        title: `${tour.title} – ${BRAND}`,
        description: this.shorten(`${tour.desc} Desde ${tour.precio}.`)
      };
    }

    const url = SITE + (path === '/' ? '/' : path);
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.doc.querySelector('link[rel="canonical"]')?.setAttribute('href', url);
  }

  private shorten(text: string, max = 160) {
    if (text.length <= max) return text;
    return text.slice(0, max - 1).replace(/\s+\S*$/, '') + '…';
  }
}
