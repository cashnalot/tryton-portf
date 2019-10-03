import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';

const servicesRouting: Routes = [
  {
    path: '',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(servicesRouting)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
