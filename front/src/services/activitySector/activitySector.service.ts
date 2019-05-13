import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {ActivitySector} from '../../models/activitySector';

@Injectable({
  providedIn: 'root'
})

export class ActivitySectorService {
  private activitySectorList: ActivitySector[] = [];
  public activitySectors$: BehaviorSubject<ActivitySector[]> = new BehaviorSubject(this.activitySectorList);
  private activitySectorsUrl = 'http://localhost:9428/api/activitySectors/';
  constructor(private http: HttpClient) {
        this.http.get<ActivitySector[]>(this.activitySectorsUrl).subscribe(value => {
            this.activitySectorList = value;
            this.activitySectors$.next(value);
        });
  }

}
