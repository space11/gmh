import { Guid } from 'typescript-guid';
import { ActorbaseModel } from './actorbase-model';

export interface Actor extends ActorbaseModel {
  /** GUID id */
  id: Guid;
}
