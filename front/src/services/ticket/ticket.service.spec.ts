import { TestBed } from '@angular/core/testing';

import { TicketService } from './ticket.service';
import {describe, expect} from '@angular/core/testing/src/testing_internal';

describe('TicketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TicketService = TestBed.get(TicketService);
    expect(service).toBeTruthy();
  });
});
