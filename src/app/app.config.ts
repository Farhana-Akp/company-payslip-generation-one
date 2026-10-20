import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { withInMemoryScrolling } from '@angular/router';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
provideRouter(
  routes,
  withInMemoryScrolling({
    anchorScrolling: 'enabled'
  })
)
  ]
};
