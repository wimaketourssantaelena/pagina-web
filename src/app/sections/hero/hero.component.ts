import { Component, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ValoresComponent } from '../valores/valores.component';

type Dispositivo = 'escritorio' | 'tablet' | 'celular';
type PorDispositivo<T> = Record<Dispositivo, T>;
type Tono = 'claro' | 'oscuro';
interface FotoHero {
  src: string;
  webp?: boolean;
  tono: Tono | PorDispositivo<Tono>;
  pos?: string | PorDispositivo<string>;
}

@Component({
  selector: 'app-section-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, ValoresComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  // Las fotos nuevas vienen recortadas por dispositivo: nombre-celular.webp (hasta 600 px),
  // nombre-tablet.webp (hasta 1100 px) y nombre-escritorio.webp (el resto).
  // tono = cómo es lo que queda detrás del texto: 'claro' lleva letras oscuras y 'oscuro' letras blancas
  // pos = qué parte de la foto se ve, para que el texto caiga en el cielo y el paisaje quede libre
  // Si cambia según el dispositivo, va como { escritorio, tablet, celular }
  images: FotoHero[] = [
    { src: '/img-carucel/hero-cerro-kennedy.jpg', tono: 'claro' },
    { src: '/img-carucel/atardecer', webp: true, tono: 'claro', pos: 'center top' },
    { src: '/img-carucel/amanecer', webp: true, tono: 'claro', pos: 'center top' },
    { src: '/img-carucel/sol.jpeg', tono: 'oscuro', pos: 'center' },
    { src: '/img-carucel/montano', webp: true, tono: 'claro', pos: 'center top' }
  ];

  currentIndex = signal(0);
  dispositivo = signal<Dispositivo>('escritorio');
  tonoActual = computed(() => this.segun(this.images[this.currentIndex()].tono));
  private intervalId: any;
  private medios = [matchMedia('(max-width: 600px)'), matchMedia('(max-width: 1100px)')];
  private alCambiarAncho = () => this.dispositivo.set(
    this.medios[0].matches ? 'celular' : this.medios[1].matches ? 'tablet' : 'escritorio'
  );

  ngOnInit() {
    this.alCambiarAncho();
    this.medios.forEach(m => m.addEventListener('change', this.alCambiarAncho));
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.medios.forEach(m => m.removeEventListener('change', this.alCambiarAncho));
    this.stopAutoSlide();
  }

  segun<T>(valor: T | PorDispositivo<T> | undefined): T | undefined {
    if (valor && typeof valor === 'object') return (valor as PorDispositivo<T>)[this.dispositivo()];
    return valor as T | undefined;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoSlide() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide() {
    this.currentIndex.update(v => (v + 1) % this.images.length);
  }

  prevSlide() {
    this.currentIndex.update(v => (v - 1 + this.images.length) % this.images.length);
  }

  setIndex(i: number) {
    this.currentIndex.set(i);
    this.stopAutoSlide();
    this.startAutoSlide(); // Reset timer
  }
}
