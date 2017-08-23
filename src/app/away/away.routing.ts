import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AwayComponent } from './away.component';

const ROUTES: Routes = [
  { path: '', component: AwayComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(ROUTES) ],
  exports: [ RouterModule ]
})
export class AwayRoutingModule {
  static components = [ AwayComponent ];
}
