import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'about', loadChildren: './about/about.module#AboutModule' },
  { path: 'estimate', loadChildren: './estimate/estimate.module#EstimateModule' },
  { path: 'services', loadChildren: './services/services.module#ServicesModule' },
  { path: 'not-found', loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule' },
  { path: '**', redirectTo: '/not-found'  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
