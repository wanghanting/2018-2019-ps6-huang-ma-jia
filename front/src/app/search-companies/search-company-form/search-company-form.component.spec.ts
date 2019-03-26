import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCompanyFormComponent } from './search-company-form.component';

describe('SearchCompanyFormComponent', () => {
  let component: SearchCompanyFormComponent;
  let fixture: ComponentFixture<SearchCompanyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCompanyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCompanyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
