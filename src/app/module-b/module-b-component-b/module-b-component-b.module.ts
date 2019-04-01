import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBComponentBRoutingModule } from './module-b-component-b-routing.module';
import { ModuleBComponentBComponent } from './module-b-component-b.component';

@NgModule({
  declarations: [ModuleBComponentBComponent],
  imports: [
    CommonModule,
    ModuleBComponentBRoutingModule
  ]
})
export class ModuleBComponentBModule { }
