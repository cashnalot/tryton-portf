import { NgModule } from '@angular/core';

import { AboutComponent } from './index';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about.routing.module';

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule {}
