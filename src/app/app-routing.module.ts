import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'initiative-tracker', loadChildren: () => import('./initiative-tracker/initiative-tracker.module').then(m => m.InitiativeTrackerModule) },
  { path: '**', redirectTo: 'initiative-tracker' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
