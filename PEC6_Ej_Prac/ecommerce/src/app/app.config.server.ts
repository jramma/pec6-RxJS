import {
  mergeApplicationConfig,
  ApplicationConfig,
  importProvidersFrom,
} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientModule),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
