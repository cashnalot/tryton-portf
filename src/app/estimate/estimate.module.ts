import { NgModule } from '@angular/core';
import { EstimateComponent } from './estimate.component';
import { EstimateRoutingModule } from './estimate.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    EstimateComponent
  ],
  imports: [
    EstimateRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ]
})
export class EstimateModule {}
