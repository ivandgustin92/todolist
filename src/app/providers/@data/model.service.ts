import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

<<<<<<< HEAD
// Definicion de objetos predicados
type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;
=======
// Definicion de objectos predicados
type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(
    private _data: AngularFirestore
  ) { }
<<<<<<< HEAD
=======

>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  // Obtener la hora del servidor
  get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

<<<<<<< HEAD
  // Consulta de una coleccion con query, retorna un AngularFirestoreCollection
=======
  // Consulta de una colección con query, retorna un AngularFirestoreCollection
>>>>>>> 6962227a6b8c597741305f0f0816b5d97d3a6b01
  col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
    return typeof ref === 'string'
      ? this._data.collection(ref, queryFn)
      : ref;
  }

  // Consulta de una colección con query, retorna un observable
  col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .map((docs: DocumentChangeAction<T>[]) => {
        return docs.map((a: DocumentChangeAction<T>) => a.payload.doc.data()) as T[];
      });
  }

  // Consulta de una colección con query, retorna un observable con atributo id
  colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
    return this.col(ref, queryFn)
      .snapshotChanges()
      .map((docs: DocumentChangeAction<T>[]) => {
        return docs.map((a: DocumentChangeAction<T>) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  // Obtener un documento
  doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
    return typeof ref === 'string' ? this._data.doc<T>(ref) : ref;
  }

  // Obtener un documento con observador
  doc$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref)
      .snapshotChanges()
      .map(doc => {
        return doc.payload.data() as T;
      });
  }

  // Obtener un documento con observador y id
  docWithId$<T>(ref: DocPredicate<T>): Observable<T> {
    return this.doc(ref)
      .snapshotChanges()
      .map(doc => {
        const data = doc.payload.data();
        const id = doc.payload.id;
        return { id, ...data };
      });
  }

  // Crear un documento dandole el ID
  set<T>(ref: DocPredicate<T>, data: any) {
    const timestamp = this.timestamp;
    return this.doc(ref).set({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    });
  }

  // Crear un documento en una collección ( Crea automaticamente el ID)
  add<T>(ref: CollectionPredicate<T>, data: any) {
    const timestamp = this.timestamp;
    return this.col(ref).add({
      ...data,
      updatedAt: timestamp,
      createdAt: timestamp
    });
  }

  // Actualizar un documento
  update<T>(ref: DocPredicate<T>, data: any) {
    return this.doc(ref).update({
      ...data,
      updatedAt: this.timestamp
    });
  }

  // Eliminar un documento
  delete<T>(ref: DocPredicate<T>) {
    return this.doc(ref).delete();
  }

  /// create a reference between two documents
  connect(host: DocPredicate<any>, key: string, doc: DocPredicate<any>) {
    return this.doc(host).update({ [key]: this.doc(doc).ref });
  }

  /// returns a documents references mapped to AngularFirestoreDocument
  docWithRefs$<T>(ref: DocPredicate<T>) {
    return this.doc$(ref).map((doc: T) => {
      for (const k of Object.keys(doc)) {
        if (doc[k] instanceof firebase.firestore.DocumentReference) {
          doc[k] = this.doc(doc[k].path);
        }
      }
      return doc;
    });
  }


}
