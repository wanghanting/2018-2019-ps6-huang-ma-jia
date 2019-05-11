import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInternshipFormComponent } from './search-internship-form.component';

describe('SearchInternshipFormComponent', () => {
  let component: SearchInternshipFormComponent;
  let fixture: ComponentFixture<SearchInternshipFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInternshipFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInternshipFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
