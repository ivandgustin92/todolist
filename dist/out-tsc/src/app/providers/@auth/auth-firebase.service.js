import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
let AuthFirebaseService = class AuthFirebaseService {
    constructor(_auth) {
        this._auth = _auth;
        this.user = this._auth.authState;
    }
    // Obtenemos el estado del usuario autenticado
    get authenticated() {
        return this.user != null;
    }
    // Obtenemos el usuario actual
    get currentUser() {
        return this.user;
    }
    // Ingreso con email
    signInWithEmail(email, pass) {
        return this._auth.auth.signInWithEmailAndPassword(email, pass);
    }
    // Crear usuario con email y contraseña
    signUpWithEmail(email, pass) {
        return this._auth.auth.createUserWithEmailAndPassword(email, pass);
    }
    resetPassword(email) {
        console.log(email);
        return this._auth.auth.sendPasswordResetEmail(email);
    }
    closeSession() {
        return this._auth.auth.signOut();
    }
};
AuthFirebaseService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
], AuthFirebaseService);
export { AuthFirebaseService };
//# sourceMappingURL=auth-firebase.service.js.map