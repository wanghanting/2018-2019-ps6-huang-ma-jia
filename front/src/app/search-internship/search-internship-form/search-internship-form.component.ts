import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
import {StartDate} from '../../../models/startDate';
import {Period} from '../../../models/period';
import {StartdateService} from '../../../services/startDate/startdate.service';
import {PeriodService} from '../../../services/period/period.service';

@Component({
  selector: 'app-internhsip-form',
  templateUrl: './search-internship-form.component.html',
  styleUrls: ['./search-internship-form.component.scss']
})
export class SearchInternshipFormComponent implements OnInit {

  public studentList: Student[] = [];
  public companyList: Company[] = [];
  public internshipList: Internship[];
  public searchIntern: string;
  public stuForm: FormGroup;
  public companyForm: FormGroup;
  public internForm: FormGroup;
  public COUNTRY_LIST: Country[] ;
  public SECTOR_LIST: Sector[];
  public SPECIALTY_LIST: Specialty[];
  public TAILLE_LIST: CompanySize[] = [];
  public SECTEUR_LIST: ActivitySector[] = [];
  public STARTDATE_LIST: StartDate[] = [];
  public PERIOD_LIST: Period[] = [];
  public urlExtra: string;
  public urlExtra2: string;
  constructor(public formBuilder: FormBuilder, public  companyservice: CompanyService, public activitySectorService: ActivitySectorService,
              public companySize: CompanySizeService, public specialtyService: SpecialtyService, public sectorService: SectorService,
              public  internshipService: InternshipService, public studentService: StudentService, public countryService: CountryService,
              public  startService: StartdateService, public  periodService: PeriodService) {
    this.studentService.student$.subscribe((student) => {this.studentList = student;
    this.internshipFilter();
    });
    this.companyservice.companies$.subscribe((companies) => {this.companyList = companies;
    this.internshipFilter();
    });
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
    this.startService.startdates$.subscribe((start) => {
      this.STARTDATE_LIST = start;
    });
    this.periodService.periods$.subscribe((period) => {
      this.PERIOD_LIST = period;
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
    this.internForm = this.formBuilder.group({
      start: [''],
      period: [''],
      contract: [''],
    });
    this.stuformChange();
    this.comformChange();
    this.internformChange();

  }

  ngOnInit() {
  }
  internshipFilter() {
    this.urlExtra = '';
      this.studentList.forEach(i => this.urlExtra = this.urlExtra + '&studentId=' + i.id);
      this.companyList.forEach(i => this.urlExtra = this.urlExtra + '&companyId=' + i.id);
    this.internshipService.filterIntern(this.urlExtra + this.urlExtra2);
    this.internshipService.internships$.subscribe((internship) => this.internshipList = internship);
  }
  sectorChange(value) {
    this.specialtyService.setSectorName(value);
  }
  stuformChange() {
    this.studentService.formChange(this.stuForm);
  }
  comformChange() {
    this.companyservice.formChange(this.companyForm);
  }
  internformChange() {
    this.urlExtra2 = '';
    this.urlExtra2 = this.urlExtra2 + (this.internForm.getRawValue().start ? '&startDate=' + this.internForm.getRawValue().start : '')
    + (this.internForm.getRawValue().period ? '&period=' + this.internForm.getRawValue().period : '' )
    + (this.internForm.getRawValue().contract ? '&contractRenewed=' + this.internForm.getRawValue().contract : '');
    this.internshipFilter();
  }
  onClick(key) {
    this.internshipService.filterIntern('&name=' + key);
  }

}
