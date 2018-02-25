import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { FaceTesterComponent } from './face-tester/face-tester.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'configuration', component: ConfigurationComponent},
  { path: 'test-faces', component: FaceTesterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
