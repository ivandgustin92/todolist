import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthFirebaseService } from './providers/@auth/auth-firebase.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
let AppComponent = class AppComponent {
    constructor(_auth, router) {
        this._auth = _auth;
        this.router = router;
        this.isLogged = false;
        this._auth.currentUser.subscribe((res) => {
            if (res) {
                this.isLogged = true;
                this.router.navigate(['list']);
            }
            else {
                this.isLogged = false;
                this.router.navigate(['/login']);
            }
        });
    }
    cerrarSesion() {
        Swal.fire({
            title: 'Confirmacion',
            text: '¿Está seguro de cerrar sesión?',
            type: 'question',
            confirmButtonText: 'Cerrar',
            cancelButtonText: 'Cancelar',
            showCancelButton: true
        }).then((res) => {
            if (res.value) {
                this._auth.closeSession().then(() => {
                    Swal.fire('Exitoso', 'La sesion de usuario fue cerrada', 'success');
                });
            }
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [AuthFirebaseService,
        Router])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map