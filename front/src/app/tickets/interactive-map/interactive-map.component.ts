import { Component, OnInit } from '@angular/core';
import { SomeInformationCountryService } from '../../../services/someInformationCountry/someInformationCountry.service';
import { SomeInformationCountry } from '../../../models/someInformationCountry';

@Component({
  selector: 'app-map-world',
  templateUrl: './interactive-map.component.html',
  styleUrls: ['./interactive-map.component.scss']
})
export class InteractiveMapComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {

  }
}
