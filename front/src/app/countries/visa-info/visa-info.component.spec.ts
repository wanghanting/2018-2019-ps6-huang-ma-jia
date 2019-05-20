import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaInfoComponent } from './visa-info.component';

describe('VisaInfoComponent', () => {
  let component: VisaInfoComponent;
  let fixture: ComponentFixture<VisaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
