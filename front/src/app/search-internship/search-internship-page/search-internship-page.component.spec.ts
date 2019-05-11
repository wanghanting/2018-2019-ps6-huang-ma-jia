import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInternshipPageComponent } from './search-internship-page.component';

describe('StudentPageComponent', () => {
  let component: SearchInternshipPageComponent;
  let fixture: ComponentFixture<SearchInternshipPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInternshipPageComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInternshipPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
