/* eslint-disable no-param-reassign */
const fs = require('fs');
const Joi = require('joi');
const logger = require('../utils/logger.js');
const ValidationError = require('./errors/validation-error.js');
const NotFoundError = require('./errors/not-found-error.js');


module.exports = class BaseModel {
  constructor(name, schema) {
    if (!name) throw new Error('You must provide a name in constructor of BaseModel');
    if (!schema) throw new Error('You must provide a schema in constructor of BaseModel');
    this.schema = Joi.object()
      .keys(Object.assign({}, schema, {
        id: Joi.number()
          .required(),
      }));
    this.items = [];
    this.name = name;
    this.filePath = `${__dirname}/../../mocks/${this.name.toLowerCase()}.mocks.json`;
    this.load();
  }

  load() {
    try {
      this.items = JSON.parse(fs.readFileSync(this.filePath, 'utf8'));
    } catch (err) {
      if (err.message === 'Unexpected end of JSON input') logger.log(`Warning : ${this.filePath} has wrong JSON format`);
    }
  }

  save() {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(this.items, null, 2), 'utf8');
    } catch (err) {
      logger.log(`Error while trying to save ${this.name}`);
    }
  }

  get() {
    return this.items;
  }

  /* Company */
  getWithCompanyFilter(query) {
    let companies = this.items;

    if (query.countryId !== 'null') {
      companies = companies.filter(company => company.countryId == query.countryId);
    }

    if (query.sector && query.sector !== 'all') {
      const { Internship } = require('../models');

      companies = companies.filter(
        company => Internship.getWithIntershipFilter({
              'companyId': company.id,
              'sector': query.sector,
              'specialty': query.specialty
          }).length != 0
      );
    }

    if (query.continent && query.continent !== 'all') {
      const { Country } = require('../models');
      companies = companies.filter(
        i => Country.getByContinent(i.countryId, query.continent).length != 0,
      );
    }
    if (query.secteur && query.secteur !== 'all') {
      companies = companies.filter(
        i => i.secteur.includes(query.secteur),
      );
    }
    if (query.size && query.size !== 'all') {
      companies = this.getByTaile(query.size);
    }
    if (query.size1 && query.size2 && query.size3) {
      if (query.size1 == "0"){
        companies = companies.filter(company => !(company.employeesNumber <= 49));
      }
      if (query.size1 == "1"){
        companies = companies.filter(company => !(company.employeesNumber >= 50 && company.employeesNumber <= 499));
      }
      if (query.size1 == "2"){
        companies = companies.filter(company => !(company.employeesNumber >= 500));
      }
    }

    if (query.activitySector) {
      companies = companies.filter(company => company.activitySector == query.activitySector);
    }

    this.addRating();

    return companies;
  }

  /* Internship */
  getWithInternFilter(query) {
    let internships = this.items;

    if (query.companyId !== 'null') {
      internships = internships.filter(internship => internship.companyId == query.companyId);
    }

    if (query.hasCompanyCar) {
      internships = internships.filter(internship => internship.hasCompanyCar == true);
    }else{
      internships = internships.filter(internship => internship.hasCompanyCar == false);
    }

    if (query.contractRenewed) {
      internships = internships.filter(internship => internship.contractRenewed != '');
    }

    this.addRating();

    return internships;
  }


  getActivitySectors(){
    let activitySectors = [];
    this.items.every(company => activitySectors.push(company.activitySector));

    return [...new Set(activitySectors)];
  }

  addRating(){
    this.items.forEach(company => {
      const { Internship } = require('../models');

      company.rating = Internship.getRating(company.id);
    });
  }

  /* Company */
  getNumberCompanyByCountryId(query){
    console.log(query);
    let companies = this.items;

    if (query.countryId !== null) {
      companies = companies.filter(company => company.countryId == query.countryId);
    }

    return companies.length;
  }

  /* Internship */

  getWithIntershipFilter(query) {
    const { Student } = require('../models');

    return this.items.filter(
      internship =>
        (query.companyId == null || internship.companyId == query.companyId)
        && (query.sector == null || Student.items.find(student => student.id == internship.studentId).sector == query.sector)
        && (query.specialty == null || Student.items.find(student => student.id == internship.studentId).specialty == query.specialty)
    );
  }

  getRating(companyId){
    let sum = 0;

    let internships = this.items.filter(internship => internship.companyId == companyId);

    internships.forEach(internship => sum += internship.rating);

    return sum / internships.length;
  }

  /* Student */

  getWithStudentFilter(query) {
    return this.items.filter(student =>
      (query.sector == null || query.sector == student.sector)
      && (query.specialty == null || query.specialty == student.specialty));
  }

  getByContinent(countryID, continent) {
    const countries = this.items.filter(i => countryID === i.id && i.continent === continent);
    return countries;
  }

  /* partnerHousing */

  getByCountryId(id) {
    const items = this.items.filter(parnterHousing => parnterHousing.countryId === id);
    return items;
  }

  /* internships */
  getByCompanyId(id) {
    const items = this.items.filter(internship => internship.companyId === id);
    return items;
  }

  /* internships */
  getNumberIntershipByCountryId(query){
    var companies = [];
    var intership = [];
    var step;

    if (query.countryId !== null) {
      companies = companies.filter(company => company.countryId == query.countryId);
      for (step = 0; step<companies.length; step++) {
        intership.addAll(intership.filter(intership => intership.companyId == companies[step].companyId));
      }
    }
    return intership.length;
  }

  /* Ticket */

  getById(id) {
    const item = this.items.find(i => i.id === id);
    if (!item) throw new NotFoundError(`Cannot get ${this.name} id=${id} : not found`);
    return item;
  }

  getBySomeInformation(filiere, specialite) {
    const item = this.items.filter(i => (i.sector === filiere) && (i.specialty === specialite));
    if (!item) throw new NotFoundError('Cannot get : not found');
    return item;
  }

  getByContractRenewedAndHasCompanyCar(contractRenewed, hasCompanyCar) {
    const item = this.items.filter(i => (i.contractRenewed === contractRenewed) && (i.hasCompanyCar === hasCompanyCar));
    if (!item) throw new NotFoundError('Cannot get : not found');
    return item;
  }

  filterCountry(continent) {
    if (continent === 'all') {
      console.log('continent = all');
      return this.items;
    }
    const countries = this.items.filter(i => (i.continent === continent));
    return countries;
  }

  getBySector(secteur) {
    if (secteur === 'all') {
      return this.items;
    }
    const companies = this.items.filter(i => i.secteur === secteur);
    return companies;
  }

  getByTaile(taile) {
    if (taile === 'all') {
      return this.items;
    }
    let lowerbound;
    let higherbound;
    switch (taile) {
      case '1-50': {
        lowerbound = 1;
        higherbound = 50;
        break;
      }
      case '51-300': {
        lowerbound = 51;
        higherbound = 300;
        break;
      }
      default: {
        lowerbound = 301;
        higherbound = 100000;
      }
    }
    const companies = this.items.filter(i => (lowerbound < i.employeesNumber)
      && (i.employeesNumber < higherbound));
    return companies;
  }

  create(obj = {}) {
    const item = Object.assign({}, obj, { id: Date.now() });
    const { error } = Joi.validate(item, this.schema);
    if (error) throw new ValidationError(`Create Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error);
    this.items.push(item);
    this.save();
    return item;
  }

  createStudent(obj = {}) {
    const item = Object.assign({}, obj);
    console.log(obj);
    const { error } = Joi.validate(item, this.schema);
    if (error) throw new ValidationError(`Create Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error);
    this.items.push(item);
    this.save();
    return item;
  }

  update(id, obj) {
    if (typeof id === 'string') id = parseInt(id, 10);
    const prevObjIndex = this.items.findIndex(item => item.id === id);
    if (prevObjIndex === -1) throw new NotFoundError(`Cannot update ${this.name} id=${id} : not found`);
    console.log(this.items[prevObjIndex]);
    const updatedItem = Object.assign({}, this.items[prevObjIndex], obj);
    const { error } = Joi.validate(updatedItem, this.schema);
    if (error) throw new ValidationError(`Update Error : Object ${JSON.stringify(obj)} does not match schema of model ${this.name}`, error);
    this.items[prevObjIndex] = updatedItem;
    this.save();
    return updatedItem;
  }

  delete(id) {
    if (typeof id === 'string') id = parseInt(id, 10);
    const objIndex = this.items.findIndex(item => item.id === id);
    if (objIndex === -1) throw new NotFoundError(`Cannot delete ${this.name} id=${id} : not found`);
    this.items = this.items.filter(item => item.id !== id);
    this.save();
  }
};
