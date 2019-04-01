import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleARoutingModule} from './module-a-routing.module';
import {ModuleAComponent} from './module-a.component';
import {ModuleAComponentAComponent} from './module-a-component-a/module-a-component-a.component';
import {ModuleAComponentBComponent} from './module-a-component-b/module-a-component-b.component';
import {ModuleAComponentCComponent} from './module-a-component-c/module-a-component-c.component';

@NgModule({
  declarations: [
    ModuleAComponent,
    ModuleAComponentAComponent,
    ModuleAComponentBComponent,
    ModuleAComponentCComponent
  ],
  imports: [
    CommonModule,
    ModuleARoutingModule
  ]
})
export class ModuleAModule {
}
