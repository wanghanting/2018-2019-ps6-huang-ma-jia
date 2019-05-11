import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Sector} from '../../models/sector';

@Injectable({
  providedIn: 'root'
})

export class SectorService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  //private countryList: Country[] = []; A remettre quand le back marche
  private sectorList: Sector[];

  private sectorsUrl = 'http://localhost:9428/api/sectors/';

  /**
   * Observable which contains the list of the country.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public sectors$: BehaviorSubject<Sector[]> = new BehaviorSubject(this.sectorList);

  constructor(
    private http: HttpClient) {
        this.http.get<Sector[]>(this.sectorsUrl).subscribe(value => {
            this.sectorList = value;
            this.sectors$.next(value);
        });
    }
}
