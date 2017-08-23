import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
    PreloadAllModules
} from '@angular/router';

let isElectron = process.env.ENV === 'electron' || process.env.ENV === 'watch:electron';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'away', loadChildren: './away/away.module#AwayModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES, { useHash: isElectron, preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
