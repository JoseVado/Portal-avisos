import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AdminModel } from '../modelo/admin.model';
import { map } from 'rxjs';

@Injectable()
export class AdminServicio {
  adminColeccion: AngularFirestoreCollection<AdminModel>;
  adminDoc: AngularFirestoreDocument<AdminModel>;
  admins: Observable<AdminModel[]>;
  admin: Observable<AdminModel | null>;

  constructor(
    private db: AngularFirestore
  ) {
    this.adminColeccion = db.collection('Administrador', (ref) =>
      ref.orderBy('nombre', 'asc')
    );
  }

  getAdmins(): Observable<AdminModel[]> {
    this.admins = this.adminColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as AdminModel;
          datos.id = accion.payload.doc.id;

          return datos;
        });
      })
    );
    return this.admins;
  }

  agregarAdmin(admin: AdminModel) {
    this.adminColeccion.add(admin);
  }

  getAdmin(id: string) {
    this.adminDoc = this.db.doc<AdminModel>(`Administrador/${id}`);
    this.admin = this.adminDoc.snapshotChanges().pipe(
      map((accion) => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as AdminModel;
          datos.id = accion.payload.id;
          return datos;
        }
      })
    );
    return this.admin;
  }

  modificarAdmin(admin: AdminModel) {
    this.adminDoc = this.db.doc(`Administrador/${admin.id}`);
    this.adminDoc.update(admin);
  }

  eliminarAdmin(admin: AdminModel) {
    this.adminDoc = this.db.doc(`Administrador/${admin.id}`);
    this.adminDoc.delete();
  }
}
