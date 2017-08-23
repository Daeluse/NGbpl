import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

let isProd = process.env.ENV === 'build';
let isElectron = process.env.ENV === 'electron' || process.env.ENV === 'watch:electron';

// depending on the env mode, enable prod mode or add debugging modules
if (isProd || isElectron) {
  enableProdMode();
}

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.readyState === 'complete') {
  main();
} else {
  document.addEventListener('DOMContentLoaded', main);
}
