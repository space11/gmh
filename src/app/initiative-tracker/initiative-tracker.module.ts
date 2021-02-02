import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitiativeTrackerRoutingModule } from './initiative-tracker-routing.module';
import { InitiativeTrackerComponent } from './page/initiative-tracker.component';
import { MaterialModule } from '../shared/material/material.module';
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import { CoreModule } from '../shared/core/core.module';
import { ListOfActorsComponent } from './components/list-of-actors/list-of-actors.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [InitiativeTrackerComponent, CreateActorComponent, ListOfActorsComponent],
  imports: [
    CommonModule,
    InitiativeTrackerRoutingModule,
    MaterialModule,
    CoreModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ]
})
export class InitiativeTrackerModule { }
