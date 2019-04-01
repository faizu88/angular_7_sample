import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ModuleBComponentBComponent} from "./module-b-component-b.component";

const routes: Routes = [
 {
  path: '',
  component: ModuleBComponentBComponent,
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBComponentBRoutingModule { }
