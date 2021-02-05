import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Actor } from 'src/app/models/actor.model';
import { InitiativeTrackerFacadeService } from '../initiative-tracker-facade.service';

@Component({
  selector: 'app-initiative-tracker',
  templateUrl: './initiative-tracker.component.html',
  styleUrls: ['./initiative-tracker.component.scss']
})
export class InitiativeTrackerComponent implements OnInit {

  data$: Observable<Actor[]>;

  constructor(private initiativeTrackerFacade: InitiativeTrackerFacadeService) {
    this.data$ = this.initiativeTrackerFacade.actors$;

  }

  ngOnInit(): void {
  }

}
