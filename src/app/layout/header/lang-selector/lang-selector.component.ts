import { Component, ElementRef, HostListener, computed, inject, signal } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../services/language.service';

/* Selector de idioma de la cabecera: botón con la bandera y lista propia (cambia el idioma con LanguageService, como el select de antes) */
@Component({
  selector: 'app-lang-selector',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.css'
})
export class LangSelectorComponent {
  private langService = inject(LanguageService);
  private host = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly langs = [
    { code: 'es', label: 'ES', name: 'Español', flag: '/assets/banderas/es.svg' },
    { code: 'en', label: 'EN', name: 'English', flag: '/assets/banderas/gb.svg' },
    { code: 'fr', label: 'FR', name: 'Français', flag: '/assets/banderas/fr.svg' }
  ];
  open = signal(false);
  focused = signal(0);
  current = computed(() => this.langs.find(l => l.code === this.langService.currentLang()) ?? this.langs[0]);

  toggle() {
    this.open() ? this.close() : this.openList();
  }

  openList() {
    this.focused.set(Math.max(0, this.langs.indexOf(this.current())));
    this.open.set(true);
    setTimeout(() => this.focusOption(this.focused()));
  }

  close(returnFocus = false) {
    this.open.set(false);
    if (returnFocus) this.host.nativeElement.querySelector<HTMLElement>('.lang-btn')?.focus();
  }

  choose(code: string) {
    if (code !== this.langService.currentLang()) this.langService.setLanguage(code);
    this.close(true);
  }

  onButtonKey(e: KeyboardEvent) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      this.openList();
    }
  }

  onListKey(e: KeyboardEvent) {
    const n = this.langs.length;
    switch (e.key) {
      case 'ArrowDown': this.move((this.focused() + 1) % n); break;
      case 'ArrowUp': this.move((this.focused() - 1 + n) % n); break;
      case 'Home': this.move(0); break;
      case 'End': this.move(n - 1); break;
      case 'Enter':
      case ' ': this.choose(this.langs[this.focused()].code); break;
      case 'Tab': this.close(); return;
      default: return;
    }
    e.preventDefault();
  }

  private move(i: number) {
    this.focused.set(i);
    this.focusOption(i);
  }

  private focusOption(i: number) {
    this.host.nativeElement.querySelectorAll<HTMLElement>('.lang-option')[i]?.focus();
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open()) this.close(true);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(e: MouseEvent) {
    if (this.open() && !this.host.nativeElement.contains(e.target as Node)) this.close();
  }
}
