import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompanyComponent } from './search-company.component';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('InternshipComponent', () => {
  let component: SearchCompanyComponent;
  let fixture: ComponentFixture<SearchCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
