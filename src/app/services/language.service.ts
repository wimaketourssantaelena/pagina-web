import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal('es');

  constructor(private translate: TranslateService) {
    const saved = localStorage.getItem('user_lang') || 'es';
    this.setLanguage(saved);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('user_lang', lang);
    this.currentLang.set(lang);
  }

  toggleLanguage() {
    const next = this.currentLang() === 'es' ? 'en' : 'es';
    this.setLanguage(next);
  }
}
