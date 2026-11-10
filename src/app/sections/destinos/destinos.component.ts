import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

export interface Destino {
  key: string;
  titleKey: string;
  descKey: string;
  cover: string;
  isVideo?: boolean;
  videoSrc?: string;
  jsonUrl: string;
  images: string[];
}

@Component({
  selector: 'app-section-destinos',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './destinos.component.html',
  styleUrl: './destinos.component.css'
})
export class DestinosComponent implements OnInit, OnDestroy {
  constructor(private http: HttpClient) {}

  // Las fotos de cada galería se cargan de assets/destinos-magicos/*.json
  destinos: Destino[] = [
    {
      key: 'sierra',
      titleKey: 'DESTINOS.SIERRA.TITLE',
      descKey: 'DESTINOS.SIERRA.DESC',
      cover: '',
      isVideo: true,
      videoSrc: '/assets/video/vid1.mp4',
      jsonUrl: '/assets/destinos-magicos/sierra-nevada.json',
      images: []
    },
    {
      key: 'perdida',
      titleKey: 'DESTINOS.PERDIDA.TITLE',
      descKey: 'DESTINOS.PERDIDA.DESC',
      cover: '/assets/destinos-magicos/ciudad-perdida/1.jpeg',
      jsonUrl: '/assets/destinos-magicos/ciudad-perdida.json',
      images: []
    },
    {
      key: 'guajira',
      titleKey: 'DESTINOS.GUAJIRA.TITLE',
      descKey: 'DESTINOS.GUAJIRA.DESC',
      cover: '/assets/destinos-magicos/guajira/1.jpeg',
      jsonUrl: '/assets/destinos-magicos/guajira.json',
      images: []
    }
  ];

  galleryOpen = signal(false);
  activeDestino: Destino | null = null;
  activeIndex = signal(0);

  ngOnInit() {
    this.destinos.forEach(d => {
      this.http.get<{ images?: string[] }>(d.jsonUrl).subscribe({
        next: data => { d.images = data.images ?? []; },
        error: () => { d.images = []; }
      });
    });
  }

  ngOnDestroy() {
    document.body.style.overflow = '';
  }

  openGallery(d: Destino) {
    if (!d.images.length) return;
    this.activeDestino = d;
    this.activeIndex.set(0);
    this.galleryOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeGallery() {
    this.galleryOpen.set(false);
    this.activeDestino = null;
    document.body.style.overflow = '';
  }

  next() {
    if (!this.activeDestino) return;
    const total = this.activeDestino.images.length;
    this.activeIndex.update(i => (i + 1) % total);
  }

  prev() {
    if (!this.activeDestino) return;
    const total = this.activeDestino.images.length;
    this.activeIndex.update(i => (i - 1 + total) % total);
  }

  goTo(i: number) {
    this.activeIndex.set(i);
  }

  @HostListener('document:keydown', ['$event'])
  onKey(e: KeyboardEvent) {
    if (!this.galleryOpen()) return;
    if (e.key === 'Escape') this.closeGallery();
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
}
