<<<<<<< HEAD
import { element } from 'protractor';
=======
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Promise } from 'q';
import { ModelService } from '../../providers/@data/model.service';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
<<<<<<< HEAD
// import { Component } from '@angular/core';
import { from } from 'rxjs';
=======
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  tasks: any[] = [];
  taskValue: string;
  currentUser: firebase.User;
<<<<<<< HEAD
=======

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  constructor(
    private _snackBar: MatSnackBar,
    private _model: ModelService,
    private _auth: AuthFirebaseService
  ) {
<<<<<<< HEAD
=======

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
    this._auth.currentUser.subscribe((user: firebase.User) => {
      this.currentUser = user;
      this.getUserTasks(user.uid);
    });
<<<<<<< HEAD
   }
getUserTasks(id) {
  this._model.colWithIds$('tasks', ref => ref.where('user', '==', id)).subscribe((resp: any[]) => {
    this.tasks = resp;
  });
}

  // Se ejecuta cuando se presiona enter y manda el valor del input para que se agregue a la lista
  // llamando al metodo que recibe un evento
=======
  }


  getUserTasks(id) {
    this._model.colWithIds$('tasks', ref => ref.where('user', '==', id)).subscribe((resp: any[]) => {
      this.tasks = resp;
    });
  }

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  onPress(evt) {
    if (evt.key === 'Enter') {
      this.addTask(this.taskValue);
      this.taskValue = '';
    }
  }
<<<<<<< HEAD
// Llama al evento validate task para ver si el campo esta vacio si no agrega la tarea a la lista
// y manda un mensaje de vuelta
  addTask(value) {

    this.validateTask().then((res => {
=======

  addTask(value) {

    this.validateTask().then((res => {

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
      const dataTask = {
        text: value,
        complete: false,
        user: this.currentUser.uid
      };
<<<<<<< HEAD
=======

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
      this._model.add('tasks', dataTask).then(() => {
        this.showMessage('Tarea creada exitosamente');
      }).catch((error) => {
        this.showMessage(error);
      });

    })).catch(error => {
      this.showMessage(error);
    });
  }

<<<<<<< HEAD
    // Metodo que muestra un mensaje en pantalla
    showMessage(msg: string) {
      this._snackBar.open(msg, '', {
        duration: 1000
      });
    }
// Valida si el campo para ingresar datos esta vacio y manda un mensaje de lo contrariodevuelve true
=======
  showMessage(msg: string) {
    this._snackBar.open(msg, '', {
      duration: 1000
    });
  }

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  validateTask(): Promise<any> {
    return Promise((resolve, reject) => {
      if (this.taskValue === '' || this.taskValue === undefined || this.taskValue == null) {
        reject('Tarea vacia');
      } else {
        resolve(true);
      }
    });
  }

<<<<<<< HEAD
// Metodo que se invoca al hacer click en el boton completar manda las tareas selecionadas y las subraya como completas
  completeTasks(list) {
    Swal.fire({
      title: 'Confirmacion',
      text: '¿Esta seguro de marcar como completa(s) esta(s) tareas(s)?',
=======
  completeTasks(list) {


    Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de marcar como completa(s) esta(s) tarea(s)?',
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Completar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
<<<<<<< HEAD
      if( result.value ) {
        list._selected.forEach(( element: any ) => {
=======
      if (result.value) {
        list._selected.forEach((element: any) => {

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
          this._model.update(`tasks/${element._value}`, {
            complete: true
          }).then(() => {
            this.showMessage('Tareas marcadas como realizadas');
          }).catch((error) => {
            this.showMessage(error);
          });
        });
      }
    });
  }

<<<<<<< HEAD
// Metodo que se invoca al hacer click en el boton eliminar y borra las tareas selecionadas
  deleteTask(list) {
    Swal.fire({
      title: 'Confirmacion',
      text: '¿Esta seguro de eliminar esta(s) tareas(s)?',
=======
  deleteTask(list) {

    Swal.fire({
      title: 'Confirmación',
      text: '¿Está seguro de eliminar esta(s) tarea(s)?',
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
<<<<<<< HEAD

        list._selected.forEach( element => {
=======
        list._selected.forEach(element => {
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
          this._model.delete(`tasks/${element._value}`).then(() => {
            this.showMessage('Tareas eliminadas');
          }).catch((error) => {
            this.showMessage(error);
          });
        });
      }
    });
<<<<<<< HEAD
  }
=======

  }

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
}
