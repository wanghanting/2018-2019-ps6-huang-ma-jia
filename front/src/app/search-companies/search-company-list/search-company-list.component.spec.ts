import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompanyListComponent } from './search-company-list.component';

describe('SearchCompanyListComponent', () => {
  let component: SearchCompanyListComponent;
  let fixture: ComponentFixture<SearchCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
