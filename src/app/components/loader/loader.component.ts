import { Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  template: `
    <div class="loader-overlay">
      <div class="loader-spinner">🏔️</div>
      <p>Cargando aventura...</p>
    </div>
  `,
  styles: [`
    .loader-overlay {
      position: fixed; inset: 0;
      background: var(--verde-oscuro);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      z-index: 9999; color: white;
    }
    .loader-spinner {
      font-size: 64px;
      animation: spin 1s linear infinite;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    p { font-size: 18px; font-weight: 700; margin-top: 16px; }
  `]
})
export class LoaderComponent {}
