import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CoreModule } from '../shared/core/core.module';
import { MaterialModule } from '../shared/material/material.module';
import { CreateActorComponent } from './components/create-actor/create-actor.component';
import { ListOfActorsComponent } from './components/list-of-actors/list-of-actors.component';
import { InitiativeTrackerRoutingModule } from './initiative-tracker-routing.module';
import { InitiativeTrackerComponent } from './page/initiative-tracker.component';



@NgModule({
  declarations: [InitiativeTrackerComponent, CreateActorComponent, ListOfActorsComponent],
  imports: [
    CommonModule,
    InitiativeTrackerRoutingModule,
    MaterialModule,
    CoreModule,
    MatTableModule,
    MatPaginatorModule,
  ]
})
export class InitiativeTrackerModule { }
