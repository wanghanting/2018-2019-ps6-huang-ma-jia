import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeComponent } from './loge.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('InternshipComponent', () => {
  let component: LogeComponent;
  let fixture: ComponentFixture<LogeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
