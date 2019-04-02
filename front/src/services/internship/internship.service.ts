import { Injectable } from '@angular/core';
import {Internship} from '../../models/internship';
import {BehaviorSubject, Subject} from "rxjs";
import {INTERNSHIP_MOCKED} from "../../mocks/internship";

@Injectable({
  providedIn: 'root'
})

export class InternshipService {
  private internshipList: Internship[] = INTERNSHIP_MOCKED;
  private searchTerms = new Subject<Internship>();
  public internships$: BehaviorSubject<Internship[]> = new BehaviorSubject(this.internshipList);

  constructor() {
  }

  getStagesId(idEntreprise){
  }

  getStageSomeInformations(idStage){
  }

  getStageAllInformations(idStage){
  }
}
