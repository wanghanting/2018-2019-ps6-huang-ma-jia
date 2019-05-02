import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SpecialtyService {
  private specialtyList: String[];

  private specialtiesUrl = 'http://localhost:9428/api/specialties/';

  public specialties$: BehaviorSubject<String[]> = new BehaviorSubject(this.specialtyList);

  constructor(
    private http: HttpClient) {  
    }

    public setSectorName(name: string) {
      if (name == '- Filiere -'){
        this.http.get<String[]>(this.specialtiesUrl).subscribe(value => {
          this.specialtyList = value;
          this.specialties$.next(value);
        });
      } else {
        this.http.get<String[]>(this.specialtiesUrl + "?sector=" + name).subscribe(value => {
            this.specialtyList = value;
            this.specialties$.next(value);
        });
      }
    }
}
