import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiativeTrackerRoutingModule } from './initiative-tracker-routing.module';
import { InitiativeTrackerComponent } from './initiative-tracker.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [InitiativeTrackerComponent],
  imports: [
    CommonModule,
    InitiativeTrackerRoutingModule,
    MaterialModule
  ]
})
export class InitiativeTrackerModule { }
