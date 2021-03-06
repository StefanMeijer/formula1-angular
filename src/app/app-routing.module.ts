import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DriverInformationComponent } from './driver-information/driver-information.component';
import { DriversComponent } from './drivers/drivers.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'drivers', component: DriversComponent},
  { path: 'driverinfo/:code', component: DriverInformationComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  DriversComponent,
  DriverInformationComponent,
  PageNotFoundComponent,
];
