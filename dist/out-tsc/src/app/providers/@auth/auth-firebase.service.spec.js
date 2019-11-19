import { TestBed } from '@angular/core/testing';
import { AuthFirebaseService } from './auth-firebase.service';
describe('@authFirebaseService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(AuthFirebaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-firebase.service.spec.js.map