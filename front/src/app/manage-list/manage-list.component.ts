import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/login/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {List} from '../../models/list';
import {ListService} from '../../services/list/list.service';
import {CompanyService} from '../../services/company/company.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-manage-list-page',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.scss']
})
export class ManageListComponent implements OnInit {
  public list: List;
  constructor(public listService: ListService, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.listService.getList(params['userid']);
    });
    this.listService.interviewlist$.subscribe((managelist) => {
      this.list = managelist;
    });
  }
  ngOnInit() {}
}
