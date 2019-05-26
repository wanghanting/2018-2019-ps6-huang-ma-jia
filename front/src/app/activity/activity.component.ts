import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {
  public Imgsrc: String;
  constructor() {
    this.Imgsrc="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558821935744&di=229a6141e82eaec6116e5cb48f2f7416&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180702%2Fcfe352d2629b465e915b0d9545ba5b20.jpg"
  }
  ngOnInit() {}
}
