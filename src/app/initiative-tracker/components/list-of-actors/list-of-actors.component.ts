import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Actor } from 'src/app/models/actor.model';
import { InitiativeTrackerFacadeService } from '../../initiative-tracker-facade.service';
import { ActorsDataSource } from './actors-datasource';

@Component({
  selector: 'app-list-of-actors',
  templateUrl: './list-of-actors.component.html',
  styleUrls: ['./list-of-actors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOfActorsComponent implements AfterViewInit, OnInit, OnChanges {

  @Input() data: Actor[] = [];
  @Input() loading: boolean = false;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Actor>;

  dataSource: ActorsDataSource;

  /**
   *
   */
  constructor(private initiativeTrackerFacade: InitiativeTrackerFacadeService) {
   
  }



  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'name',
    'initiative',
    'wounds',
    'advantages',
    'usedLuckPoints',
  ];

  ngOnChanges(changes: SimpleChanges) {
    this.dataSource = new ActorsDataSource(this.data);
    this.dataSource.data = this.data;
    this.dataSource.sort = this.sort;
   }

  ngOnInit() {
   
  }

  ngAfterViewInit() {
    this.dataSource = new ActorsDataSource(this.data);
    this.dataSource.data = this.data;
    this.dataSource.sort = this.sort;
    
  }
}
