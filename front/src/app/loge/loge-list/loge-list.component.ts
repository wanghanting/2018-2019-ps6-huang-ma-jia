import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LogeService} from '../../../services/loge/loge.service';
import {Loge} from '../../../models/loge';

@Component({
  selector: 'app-loge-list',
  templateUrl: './loge-list.component.html',
  styleUrls: ['./loge-list.component.scss']
})
export class LogeListComponent implements OnInit {

  public logeList: Loge[];
  @Output() clickEventList = new EventEmitter<String>();

  constructor(public logeService: LogeService) {
    this.logeService.loge$.subscribe((loge) => this.logeList = loge);
  }

  ngOnInit() {
  }
  onClick(id) {
    this.clickEventList.emit(id);
  }
}
