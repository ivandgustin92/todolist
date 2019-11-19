import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
let ResetComponent = class ResetComponent {
    constructor(fb, _authService, router) {
        this.fb = fb;
        this._authService = _authService;
        this.router = router;
        this.resetForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
        });
    }
    onSubmit() {
        this._authService.resetPassword(this.resetForm.value.email).finally(() => {
            Swal.fire('Exito', 'Hemos enviado un enlace al correo electronico para recuperar su contraseña', 'success').then(() => {
                this.gotoIniciarSesion();
            });
        });
    }
    gotoIniciarSesion() {
        this.router.navigate(['/login']);
    }
};
ResetComponent = tslib_1.__decorate([
    Component({
        selector: 'app-reset',
        templateUrl: './reset.component.html',
        styleUrls: ['./reset.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AuthFirebaseService,
        Router])
], ResetComponent);
export { ResetComponent };
//# sourceMappingURL=reset.component.js.map