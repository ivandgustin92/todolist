import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
let ModelService = class ModelService {
    constructor(_data) {
        this._data = _data;
    }
    // Obtener la hora del servidor
    get timestamp() {
        return firebase.firestore.FieldValue.serverTimestamp();
    }
    // Consulta de una coleccion con query, retorna un AngularFirestoreCollection
    col(ref, queryFn) {
        return typeof ref === 'string'
            ? this._data.collection(ref, queryFn)
            : ref;
    }
    // Consulta de una colección con query, retorna un observable
    col$(ref, queryFn) {
        return this.col(ref, queryFn)
            .snapshotChanges()
            .map((docs) => {
            return docs.map((a) => a.payload.doc.data());
        });
    }
    // Consulta de una colección con query, retorna un observable con atributo id
    colWithIds$(ref, queryFn) {
        return this.col(ref, queryFn)
            .snapshotChanges()
            .map((docs) => {
            return docs.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        });
    }
    // Obtener un documento
    doc(ref) {
        return typeof ref === 'string' ? this._data.doc(ref) : ref;
    }
    // Obtener un documento con observador
    doc$(ref) {
        return this.doc(ref)
            .snapshotChanges()
            .map(doc => {
            return doc.payload.data();
        });
    }
    // Obtener un documento con observador y id
    docWithId$(ref) {
        return this.doc(ref)
            .snapshotChanges()
            .map(doc => {
            const data = doc.payload.data();
            const id = doc.payload.id;
            return Object.assign({ id }, data);
        });
    }
    // Crear un documento dandole el ID
    set(ref, data) {
        const timestamp = this.timestamp;
        return this.doc(ref).set(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    }
    // Crear un documento en una collección ( Crea automaticamente el ID)
    add(ref, data) {
        const timestamp = this.timestamp;
        return this.col(ref).add(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    }
    // Actualizar un documento
    update(ref, data) {
        return this.doc(ref).update(Object.assign({}, data, { updatedAt: this.timestamp }));
    }
    // Eliminar un documento
    delete(ref) {
        return this.doc(ref).delete();
    }
    /// create a reference between two documents
    connect(host, key, doc) {
        return this.doc(host).update({ [key]: this.doc(doc).ref });
    }
    /// returns a documents references mapped to AngularFirestoreDocument
    docWithRefs$(ref) {
        return this.doc$(ref).map((doc) => {
            for (const k of Object.keys(doc)) {
                if (doc[k] instanceof firebase.firestore.DocumentReference) {
                    doc[k] = this.doc(doc[k].path);
                }
            }
            return doc;
        });
    }
};
ModelService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], ModelService);
export { ModelService };
//# sourceMappingURL=model.service.js.map