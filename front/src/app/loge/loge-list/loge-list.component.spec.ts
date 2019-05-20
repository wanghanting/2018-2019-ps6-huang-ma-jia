import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogeListComponent } from './loge-list.component';

describe('InternshipStudentComponent', () => {
  let component: LogeListComponent;
  let fixture: ComponentFixture<LogeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
