import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompanyPageComponent } from './search-company-page.component';

describe('StudentPageComponent', () => {
  let component: SearchCompanyPageComponent;
  let fixture: ComponentFixture<SearchCompanyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCompanyPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompanyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
