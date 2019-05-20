import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Loge} from '../../../models/loge';

@Component({
  selector: 'app-loge',
  templateUrl: './loge.component.html',
  styleUrls: ['./loge.component.scss']
})
export class LogeComponent implements OnInit {
  @Input()
  loge: Loge;
  constructor() {
  }

  ngOnInit() {
  }

}
