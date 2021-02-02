import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { Actor } from 'src/app/models/actor.model';



// TODO: replace this with real data from your application
export const EXAMPLE_DATA: Actor[] = [
  { id: '52f91887-2bc6-44c8-a177-bb624e104056', advantages: 0, initiative: 17, usedLuckPoints: 0, name: "Bobba Fet", wounds: 0, },
  { id: '5d9a32b0-672f-4ad2-ba80-2d3763d6f314', advantages: 0, initiative: 16, usedLuckPoints: 0, name: "Dark Vader", wounds: 0, },
  { id: '68312bb4-ecdc-4786-ad0f-e4c06345460a', advantages: 0, initiative: 6, usedLuckPoints: 0, name: "R2D2", wounds: 0, }
];

/**
 * Data source for the ListOfActors view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ListOfActorsDataSource extends DataSource<Actor> {
  data: Actor[] = EXAMPLE_DATA;
  sort?: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Actor[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      // this.sort.sortChange 
    ];

    dataMutations;
    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData([...this.data]);
    }));

  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }


  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Actor[]) {
    if (!this.sort?.active || this.sort?.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        //case 'initiative': return compare(a.name, b.name, isAsc);
        case 'initiative': return compare(+a.initiative, +b.initiative, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
