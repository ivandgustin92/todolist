import { TestBed } from '@angular/core/testing';

import { AuthFirebaseService } from './auth-firebase.service';

<<<<<<< HEAD
describe('@authFirebaseService', () => {
=======
describe('AuthFirebaseService', () => {
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthFirebaseService = TestBed.get(AuthFirebaseService);
    expect(service).toBeTruthy();
  });
});
