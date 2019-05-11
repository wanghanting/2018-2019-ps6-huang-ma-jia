import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Searchcompany} from '../../../models/searchcompany';
import {CompanyService} from '../../../services/company/company.service';
import {SectorService} from '../../../services/sector/sector.service';
import {SpecialtyService} from '../../../services/specialty/specialty.service';
import {CompanySize} from '../../../models/companySize';
import {ActivitySector} from '../../../models/activitySector';
import {ActivitySectorService} from '../../../services/activitySector/activitySector.service';
import {CompanySizeService} from '../../../services/companySize/companySize.service';
import {InternshipService} from '../../../services/internship/internship.service';
import {StudentService} from '../../../services/student/student.service';
import {Sector} from '../../../models/sector';
import {Specialty} from '../../../models/specialty';
import {Student} from '../../../models/student';
import {Company} from '../../../models/company';
import {Internship} from '../../../models/internship';
import {Country} from '../../../models/country';
import {CountryService} from '../../../services/country/country.service';

@Component({
  selector: 'app-internhsip-form',
  templateUrl: './search-internship-form.component.html',
  styleUrls: ['./search-internship-form.component.scss']
})
export class SearchInternshipFormComponent implements OnInit {

  // Note: We are using here ReactiveForms to create our form. Be careful when you look for some documentation to
  // avoid TemplateDrivenForm (another type of form)
  /**
   * TicketForm: Object which manages the form in our component.
   * More information about Reactive Forms: https://angular.io/guide/reactive-forms
   */
  public studentList: Student[];
  public companyList: Company[];
  public internshipList: Internship[];
  public stuForm: FormGroup;
  public companyForm: FormGroup;
  public COUNTRY_LIST: Country[] ;
  public SECTOR_LIST: Sector[];
  public SPECIALTY_LIST: Specialty[];
  public TAILLE_LIST: CompanySize[] = [];
  public SECTEUR_LIST: ActivitySector[] = [];
  constructor(public formBuilder: FormBuilder, public  companyservice: CompanyService, public activitySectorService: ActivitySectorService,
              public companySize: CompanySizeService, public specialtyService: SpecialtyService, public sectorService: SectorService,
              public  internshipService: InternshipService, public studentService: StudentService, public countryService: CountryService ) {
    this.countryService.countries$.subscribe((country) => {
      this.COUNTRY_LIST = country;
    });
    this.activitySectorService.activitySectors$.subscribe((sectors) => {
      this.SECTEUR_LIST = sectors;
    });
    this.sectorService.sectors$.subscribe((sectors) => {
      this.SECTOR_LIST = sectors;
    });
    this.specialtyService.specialties$.subscribe((specialties) => {
      this.SPECIALTY_LIST = specialties;
    });
    this.companySize.companySizes$.subscribe((sizes) => {
      this.TAILLE_LIST = sizes;
    });
    this.internshipService.internships$.subscribe((internship) => {
      this.internshipList = internship;
    });

    this.stuForm = this.formBuilder.group({
      sector: [''],
      specialty: [''],
    });
    this.companyForm  = this.formBuilder.group({
       country: [''],
       secteur: [''],
       size: [''],
    });
    this.internshipFilter();
  }

  ngOnInit() {
  }
  internshipFilter() {
    this.companyservice.formChange(this.companyForm);

  }
  sectorChange(value) {
    this.specialtyService.setSectorName(value);
  }
  stuformChange() {
    this.studentService.formChange(this.stuForm);
    this.studentService.student$.subscribe((student) => this.studentList = student);
  }
  comformChange() {
    this.companyservice.formChange(this.companyForm);
    this.companyservice.companies$.subscribe((companies) => this.companyList = companies);
  }
}
