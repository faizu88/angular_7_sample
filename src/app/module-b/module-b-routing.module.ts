import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ModuleBComponent} from "./module-b.component";

const routes: Routes = [
 {
  path: '',
  component: ModuleBComponent,
  children: [
   {path: 'component-a', loadChildren: './module-b-component-a/module-b-component-a.module#ModuleBComponentAModule'},
   {path: 'component-b', loadChildren: './module-b-component-b/module-b-component-b.module#ModuleBComponentBModule'}
  ]
 }
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class ModuleBRoutingModule {
}
