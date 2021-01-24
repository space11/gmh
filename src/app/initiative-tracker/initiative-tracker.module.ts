import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiativeTrackerRoutingModule } from './initiative-tracker-routing.module';
import { InitiativeTrackerComponent } from './initiative-tracker.component';


@NgModule({
  declarations: [InitiativeTrackerComponent],
  imports: [
    CommonModule,
    InitiativeTrackerRoutingModule
  ]
})
export class InitiativeTrackerModule { }
