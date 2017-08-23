import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';

import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    MdCardModule,
    HomeRoutingModule
  ],
  exports: [ HomeRoutingModule ],
  declarations: [ HomeRoutingModule.components ]
})
export class HomeModule {

}
