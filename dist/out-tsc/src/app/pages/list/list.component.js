import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Promise } from 'q';
import { ModelService } from '../../providers/@data/model.service';
import { AuthFirebaseService } from '../../providers/@auth/auth-firebase.service';
import Swal from 'sweetalert2';
let ListComponent = class ListComponent {
    constructor(_snackBar, _model, _auth) {
        this._snackBar = _snackBar;
        this._model = _model;
        this._auth = _auth;
        this.tasks = [];
        this._auth.currentUser.subscribe((user) => {
            this.currentUser = user;
            this.getUserTasks(user.uid);
        });
    }
    getUserTasks(id) {
        this._model.colWithIds$('tasks', ref => ref.where('user', '==', id)).subscribe((resp) => {
            this.tasks = resp;
        });
    }
    // Se ejecuta cuando se presiona enter y manda el valor del input para que se agregue a la lista
    // llamando al metodo que recibe un evento
    onPress(evt) {
        if (evt.key === 'Enter') {
            this.addTask(this.taskValue);
            this.taskValue = '';
        }
    }
    // Llama al evento validate task para ver si el campo esta vacio si no agrega la tarea a la lista
    // y manda un mensaje de vuelta
    addTask(value) {
        this.validateTask().then((res => {
            const dataTask = {
                text: value,
                complete: false,
                user: this.currentUser.uid
            };
            this._model.add('tasks', dataTask).then(() => {
                this.showMessage('Tarea creada exitosamente');
            }).catch((error) => {
                this.showMessage(error);
            });
        })).catch(error => {
            this.showMessage(error);
        });
    }
    // Metodo que muestra un mensaje en pantalla
    showMessage(msg) {
        this._snackBar.open(msg, '', {
            duration: 1000
        });
    }
    // Valida si el campo para ingresar datos esta vacio y manda un mensaje de lo contrariodevuelve true
    validateTask() {
        return Promise((resolve, reject) => {
            if (this.taskValue === '' || this.taskValue === undefined || this.taskValue == null) {
                reject('Tarea vacia');
            }
            else {
                resolve(true);
            }
        });
    }
    // Metodo que se invoca al hacer click en el boton completar manda las tareas selecionadas y las subraya como completas
    completeTasks(list) {
        Swal.fire({
            title: 'Confirmacion',
            text: '¿Esta seguro de marcar como completa(s) esta(s) tareas(s)?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Completar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                list._selected.forEach((element) => {
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
    // Metodo que se invoca al hacer click en el boton eliminar y borra las tareas selecionadas
    deleteTask(list) {
        Swal.fire({
            title: 'Confirmacion',
            text: '¿Esta seguro de eliminar esta(s) tareas(s)?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                list._selected.forEach(element => {
                    this._model.delete(`tasks/${element._value}`).then(() => {
                        this.showMessage('Tareas eliminadas');
                    }).catch((error) => {
                        this.showMessage(error);
                    });
                });
            }
        });
    }
};
ListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list',
        templateUrl: './list.component.html',
        styleUrls: ['./list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [MatSnackBar,
        ModelService,
        AuthFirebaseService])
], ListComponent);
export { ListComponent };
//# sourceMappingURL=list.component.js.map