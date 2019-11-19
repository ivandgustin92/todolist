import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {

  resetForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
  });
<<<<<<< HEAD
=======

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  constructor(
    private fb: FormBuilder,
    private _authService: AuthFirebaseService,
    private router: Router
  ) { }

  onSubmit() {
    this._authService.resetPassword(this.resetForm.value.email).finally(() => {
      Swal.fire(
        'Exito',
<<<<<<< HEAD
        'Hemos enviado un enlace al correo electronico para recuperar su contraseña',
        'success'
      ).then(() => {
        this.gotoIniciarSesion();
      });
    });
  }
=======
        'Hemos enviado un enlace al correo electrónico para recuperar su contraseña',
        'success'
      ).then( () => {
        this.gotoIniciarSesion();
      });

    });
  }

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  gotoIniciarSesion() {
    this.router.navigate(['/login']);
  }

}
