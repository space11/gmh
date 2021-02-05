import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Actor } from '../models/actor.model';
import { CreateActorModel } from '../models/create-actor.model';
import { Guid } from "typescript-guid";

@Injectable({
  providedIn: 'root'
})
export class InitiativeTrackerFacadeService {

  private _actors = new BehaviorSubject<Actor[]>([]);
  actors$ = this._actors.asObservable();

  constructor() { }

  createActor(newActor: CreateActorModel) {
    const newActors: Actor[] = [...this._actors.value, { ...newActor, id: Guid.create() }];
    this._actors.next(newActors);
  }

  loadActors$(): Observable<Actor[]> {
    return this.actors$;
  }
}
