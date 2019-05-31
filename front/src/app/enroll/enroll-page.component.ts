import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnrollmentService} from '../../services/enrollment/enrollment.service';

@Component({
  selector: 'app-enroll-page',
  templateUrl: './enroll-page.component.html',
  styleUrls: ['./enroll-page.component.scss']
})
export class EnrollPageComponent implements OnInit {
  public lastname: string;
  public firstname: string;
  public specialty: string;

  constructor(public enrollService: EnrollmentService, private route: ActivatedRoute) {
  }

  ngOnInit() {}
  onClick(firstname, lastname, specialty) {
    this.route.queryParams.subscribe(params => {
      this.enrollService.enroll(params['id'], firstname, lastname, specialty);
    });

  }
}
