import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Actor } from 'src/app/models/actor.model';
import { EXAMPLE_DATA, ListOfActorsDataSource } from './list-of-actors-datasource';

@Component({
  selector: 'app-list-of-actors',
  templateUrl: './list-of-actors.component.html',
  styleUrls: ['./list-of-actors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListOfActorsComponent implements AfterViewInit, OnInit {

  @ViewChild(MatSort) sort?: MatSort;
  
  dataSource = new MatTableDataSource(EXAMPLE_DATA)

  /**
   *
   */
  constructor() {
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'name',
    'initiative',
    'wounds',
    'advantages',
    'usedLuckPoints',
  ];

  ngOnInit() {

  }

  ngAfterViewInit() {
    if(this.sort) {
      this.dataSource.sort = this.sort;
    }
  }
}
