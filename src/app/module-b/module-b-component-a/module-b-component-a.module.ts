import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBComponentARoutingModule } from './module-b-component-a-routing.module';
import { ModuleBComponentAComponent } from './module-b-component-a.component';

@NgModule({
  declarations: [ModuleBComponentAComponent],
  imports: [
    CommonModule,
    ModuleBComponentARoutingModule
  ]
})
export class ModuleBComponentAModule { }
