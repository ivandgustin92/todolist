import { Component } from '@angular/core';
import { AuthFirebaseService } from './providers/@auth/auth-firebase.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
<<<<<<< HEAD
  isLogged = false;
=======

  isLogged = false;

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  constructor(
    private _auth: AuthFirebaseService,
    private router: Router
  ) {
    this._auth.currentUser.subscribe((res: firebase.User) => {
      if (res) {
        this.isLogged = true;
<<<<<<< HEAD
        this.router.navigate(['list']);
=======
        this.router.navigate(['/list']);
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
      } else {
        this.isLogged = false;
        this.router.navigate(['/login']);
      }
    });
  }

  cerrarSesion() {
    Swal.fire({
<<<<<<< HEAD
      title: 'Confirmacion',
=======
      title: 'Confirmación',
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
      text: '¿Está seguro de cerrar sesión?',
      type: 'question',
      confirmButtonText: 'Cerrar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    }).then((res) => {
      if (res.value) {
<<<<<<< HEAD
        this._auth.closeSession().then(() => {
          Swal.fire('Exitoso', 'La sesion de usuario fue cerrada', 'success');
=======
        this._auth.closeSession().then(()=>{
          Swal.fire('Exitoso', 'La sessión de usuario fue cerrada', 'success');
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
        });
      }
    });
  }

<<<<<<< HEAD

=======
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
}
