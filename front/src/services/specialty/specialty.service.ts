import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';
import {Specialty} from '../../models/specialty';

@Injectable({
  providedIn: 'root'
})

export class SpecialtyService {
  private specialtyList: Specialty[];

  private specialtiesUrl = 'http://localhost:9428/api/specialties/';

  public specialties$: BehaviorSubject<Specialty[]> = new BehaviorSubject(this.specialtyList);

  constructor(
    private http: HttpClient) {
    }

    public setSectorName(name: string) {
        this.http.get<Specialty[]>(this.specialtiesUrl + '?sector=' + name).subscribe(value => {
            this.specialtyList = value;
            this.specialties$.next(value);
        });
    }
}
