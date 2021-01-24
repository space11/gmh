import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitiativeTrackerComponent } from './initiative-tracker.component';

const routes: Routes = [{ path: '', component: InitiativeTrackerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiativeTrackerRoutingModule { }
