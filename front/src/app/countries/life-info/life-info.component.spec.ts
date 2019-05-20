import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeInfoComponent } from './life-info.component';

describe('LifeInfoComponent', () => {
  let component: LifeInfoComponent;
  let fixture: ComponentFixture<LifeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
