import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), importProvidersFrom(HttpClientModule)],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
