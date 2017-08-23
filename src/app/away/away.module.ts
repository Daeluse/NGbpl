import { NgModule } from '@angular/core';
import { MdCardModule } from '@angular/material';

import { AwayRoutingModule } from './away.routing';

@NgModule({
  imports: [
    MdCardModule,
    AwayRoutingModule
  ],
  exports: [ AwayRoutingModule ],
  declarations: [ AwayRoutingModule.components ]
})
export class AwayModule {

}
