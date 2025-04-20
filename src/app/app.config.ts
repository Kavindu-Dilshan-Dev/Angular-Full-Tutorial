import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { MyFirstService } from './services/my-first.service';

export const appConfig: ApplicationConfig = {
  providers: [MyFirstService,provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
