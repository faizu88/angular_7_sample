import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedRoutingModule} from './shared-routing.module';
import {SharedComponentAComponent} from './shared-component-a/shared-component-a.component';
import {SharedComponentBComponent} from './shared-component-b/shared-component-b.component';
import {SharedPipeAPipe} from './shared-pipe-a/shared-pipe-a.pipe';
import {SharedPipeBPipe} from './shared-pipe-b/shared-pipe-b.pipe';
import {SharedDirectiveADirective} from './shared-directive-a/shared-directive-a.directive';
import {SharedDirectiveBDirective} from './shared-directive-b/shared-directive-b.directive';

@NgModule({
 declarations: [SharedComponentAComponent, SharedComponentBComponent, SharedPipeAPipe, SharedPipeBPipe, SharedDirectiveADirective, SharedDirectiveBDirective],
 imports: [
  CommonModule,
  SharedRoutingModule
 ]
})
export class SharedModule {
}
