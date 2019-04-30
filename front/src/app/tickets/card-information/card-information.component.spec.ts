import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformationComponent } from './card-information.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('CardInformationComponent', () => {
  let component: CardInformationComponent;
  let fixture: ComponentFixture<CardInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
