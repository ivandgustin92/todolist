import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private _authService: AuthFirebaseService,
    private router: Router
  ) { }

  onSubmit() {

    this._authService.signUpWithEmail(this.registerForm.value.email, this.registerForm.value.password)
      .then((res: firebase.auth.UserCredential) => {
        Swal.fire(
          'Exito', `El usuario ${res.user.email} fue creado exitosamente`, 'success'
        ).then(() => {
          this.router.navigate(['/list']);
        });
      }).catch((error: firebase.FirebaseError) => {
<<<<<<< HEAD
        console.error(error.message);
      });
  }

=======
        Swal.fire(
          'Ups', error.message, 'error'
        );
      });
  }

  gotoIniciarSesion() {
    this.router.navigate(['/login']);
  }

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
}
