import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

<<<<<<< HEAD
=======

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private _authService: AuthFirebaseService,
    private router: Router
    ) {}

<<<<<<< HEAD
    // Cuando se presiona el boton ingresar se lanza el evento on submit este llama al servicio
    // ingresar con email que este en la carpeta providers de firebase
  onSubmit() {
    this._authService.signInWithEmail(this.loginForm.value.email, this.loginForm.value.password)
    .then((res: firebase.auth.UserCredential) => {
      Swal.fire('Bienvenido', `Hola ${res.user.email} nos encanta que regreses`, 'success')
      .then(() => {
        this.router.navigate(['/list']);
    });
    }).catch((error: firebase.FirebaseError) => {
      Swal.fire('ups', error.message, 'error');
=======
  onSubmit() {

    this._authService.signInWithEmail(this.loginForm.value.email, this.loginForm.value.password)
    .then((res: firebase.auth.UserCredential) => {
      Swal.fire('Bienvenido', `Hola ${res.user.email} nos encanta que regresaras`, 'success')
      .then(() => {
        this.router.navigate(['/list']);
      });

    }).catch((error: firebase.FirebaseError) => {
      Swal.fire(
        'Ups', error.message, 'error'
      );
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
    });
  }

  gotoCrearCuenta() {
    this.router.navigate(['/register']);
  }
<<<<<<< HEAD

=======
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
}
