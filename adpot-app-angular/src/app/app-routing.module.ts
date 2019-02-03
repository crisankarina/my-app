import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnimalsComponent} from './animals/animals.component';


const appRoutes: Routes = [
  {
    path: 'animals',
    component: AnimalsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
