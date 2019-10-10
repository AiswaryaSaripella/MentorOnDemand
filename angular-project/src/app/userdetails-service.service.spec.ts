import { TestBed } from '@angular/core/testing';

import { UserdetailsServiceService } from "./UserdetailsServiceService";

describe('UserdetailsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdetailsServiceService = TestBed.get(UserdetailsServiceService);
    expect(service).toBeTruthy();
  });
});
