import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes,
    PreloadAllModules
} from '@angular/router';

const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'away', loadChildren: './away/away.module#AwayModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
  imports: [ RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
