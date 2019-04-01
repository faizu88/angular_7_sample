import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModuleBComponentAComponent} from "./module-b-component-a.component";

const routes: Routes = [
 {
  path: '',
  component: ModuleBComponentAComponent,
 }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ModuleBComponentARoutingModule {
}
