import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Sector} from '../../models/sector';

@Injectable({
  providedIn: 'root'
})

export class SectorService {
  private sectorList: Sector[];

  private sectorsUrl = 'http://localhost:9428/api/sectors/';
  public sectors$: BehaviorSubject<Sector[]> = new BehaviorSubject(this.sectorList);

  constructor(
    private http: HttpClient) {
        this.http.get<Sector[]>(this.sectorsUrl).subscribe(value => {
            this.sectorList = value;
            this.sectors$.next(value);
        });
    }
}
