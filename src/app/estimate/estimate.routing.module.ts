import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstimateComponent } from './estimate.component';

const estimateRouting: Routes = [
  {
    path: '',
    component: EstimateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(estimateRouting)],
  exports: [RouterModule]
})
export class EstimateRoutingModule {}
