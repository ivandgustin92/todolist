import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
<<<<<<< HEAD
import { FirebaseApp } from '@angular/fire';
=======

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  private user: Observable<firebase.User | null>;

  constructor(
    private _auth: AngularFireAuth
  ) {
    this.user = this._auth.authState;
  }

<<<<<<< HEAD
    // Obtenemos el estado del usuario autenticado
    get authenticated(): boolean {
      return this.user != null;
    }

      // Obtenemos el usuario actual
    get currentUser(): Observable<firebase.User | null> {
      return this.user;
    }

     // Ingreso con email
    signInWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
      return this._auth.auth.signInWithEmailAndPassword(email, pass);
    }

    // Crear usuario con email y contraseña
    signUpWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
      return this._auth.auth.createUserWithEmailAndPassword(email, pass);
    }

    resetPassword(email): Promise<void> {
      console.log(email);
      return this._auth.auth.sendPasswordResetEmail(email);
    }

    closeSession(): Promise<void> {
      return this._auth.auth.signOut();
    }
=======
  // Obtenemos el estado del usuario autenticado
  get authenticated(): boolean {
    return this.user != null;
  }

  // Obtenemos el usuario actual
  get currentUser(): Observable<firebase.User | null> {
    return this.user;
  }
   // Ingreso con email
  signInWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
    return this._auth.auth.signInWithEmailAndPassword(email, pass);
  }

  signUpWithEmail(email, pass): Promise<firebase.auth.UserCredential> {
    return this._auth.auth.createUserWithEmailAndPassword(email, pass);
  }

  resetPassword(email): Promise<void> {
    console.log(email);
    return this._auth.auth.sendPasswordResetEmail(email);
  }

  closeSession(): Promise<void> {
    return this._auth.auth.signOut();
  }


>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
}
