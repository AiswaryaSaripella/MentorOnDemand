import { TestBed } from '@angular/core/testing';

import { MentordetailsService } from './mentordetails.service';

describe('MentordetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MentordetailsService = TestBed.get(MentordetailsService);
    expect(service).toBeTruthy();
  });
});
