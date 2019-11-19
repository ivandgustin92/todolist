import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
let LoginComponent = class LoginComponent {
    constructor(fb, _authService, router) {
        this.fb = fb;
        this._authService = _authService;
        this.router = router;
        this.loginForm = this.fb.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required],
        });
    }
    // Cuando se presiona el boton ingresar se lanza el evento on submit este llama al servicio
    // ingresar con email que este en la carpeta providers de firebase
    onSubmit() {
        this._authService.signInWithEmail(this.loginForm.value.email, this.loginForm.value.password)
            .then((res) => {
            Swal.fire('Bienvenido', `Hola ${res.user.email} nos encanta que regreses`, 'success')
                .then(() => {
                this.router.navigate(['/list']);
            });
        }).catch((error) => {
            Swal.fire('ups', error.message, 'error');
        });
    }
    gotoCrearCuenta() {
        this.router.navigate(['/register']);
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [FormBuilder,
        AuthFirebaseService,
        Router])
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map