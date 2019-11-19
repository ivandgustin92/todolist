import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
let RegisterComponent = class RegisterComponent {
    constructor(fb, _authService, router) {
        this.fb = fb;
        this._authService = _authService;
        this.router = router;
        this.registerForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
    }
    onSubmit() {
        this._authService.signUpWithEmail(this.registerForm.value.email, this.registerForm.value.password)
            .then((res) => {
            Swal.fire('Exito', `El usuario ${res.user.email} fue creado exitosamente`, 'success').then(() => {
                this.router.navigate(['/list']);
            });
        }).catch((error) => {
            console.error(error.message);
        });
    }
};
RegisterComponent = tslib_1.__decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AuthFirebaseService,
        Router])
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map