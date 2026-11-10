import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'quienes-somos',
    loadComponent: () =>
      import('./pages/nosotros/nosotros.component').then(m => m.NosotrosComponent)
  },
  {
    path: 'contacto',
    loadComponent: () =>
      import('./sections/contacto/contacto.component').then(m => m.ContactoComponent)
  },
  {
    path: 'tour/:slug',
    loadComponent: () =>
      import('./pages/tour-detail/tour-detail.component').then(m => m.TourDetailComponent)
  },
  { path: '**', redirectTo: '' }
];
