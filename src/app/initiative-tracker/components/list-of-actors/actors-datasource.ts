import { CollectionViewer } from '@angular/cdk/collections';
import { DataSource } from '@angular/cdk/table';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Actor } from 'src/app/models/actor.model';


export class ActorsDataSource implements DataSource<Actor> {
  data: Actor[] = [];

  sort: MatSort;

  constructor(data: Actor[]) {
    this.data = data;
  }

  connect(collectionViewer: CollectionViewer): Observable<Actor[] | readonly Actor[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      of(this.data),
      // this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getSortedData([...this.data]);
    }));
  }

  disconnect(collectionViewer: CollectionViewer): void { }


  loadData() {
    console.log('LOAD DATA FROM API - NOT IMPLEMENTED - NOW LOCAL DATA IS USED ONLY');

  }


  /**
 * Sort the data (client-side). If you're using server-side sorting,
 * this would be replaced by requesting the appropriate data from the server.
 */
  private getSortedData(data: Actor[]) {
    console.log({ data });

    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'initiative': return compare(a.name, b.name, isAsc);
        // case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }

}


/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
