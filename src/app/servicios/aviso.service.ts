import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AvisoModel } from '../modelo/aviso.model';
import { map } from 'rxjs';
import { FileUploadService } from './fileUpload.service';

@Injectable()
export class avisoServicio {
  avisoColeccion: AngularFirestoreCollection<AvisoModel>;
  avisoDoc: AngularFirestoreDocument<AvisoModel>;
  avisos: Observable<AvisoModel[]>;
  aviso: Observable<AvisoModel | null>;

  constructor(
    private db: AngularFirestore,
    private fileUploadServicio: FileUploadService
  ) {
    this.avisoColeccion = db.collection('Aviso', (ref) =>
      ref.orderBy('fecha', 'asc')
    );
  }

  getAvisos(): Observable<AvisoModel[]> {
    this.avisos = this.avisoColeccion.snapshotChanges().pipe(
      map((cambios) => {
        return cambios.map((accion) => {
          const datos = accion.payload.doc.data() as AvisoModel;
          datos.id = accion.payload.doc.id;

          return datos;
        });
      })
    );
    return this.avisos;
  }

  agregarMascota(aviso: AvisoModel) {
    this.avisoColeccion.add(aviso);
  }

  getAviso(id: string) {
    this.avisoDoc = this.db.doc<AvisoModel>(`Aviso/${id}`);
    this.aviso = this.avisoDoc.snapshotChanges().pipe(
      map((accion) => {
        if (accion.payload.exists === false) {
          return null;
        } else {
          const datos = accion.payload.data() as AvisoModel;
          datos.id = accion.payload.id;
          return datos;
        }
      })
    );
    return this.aviso;
  }

  modificarMascota(aviso: AvisoModel) {
    this.avisoDoc = this.db.doc(`Aviso/${aviso.id}`);
    this.avisoDoc.update(aviso);
  }

  eliminarMascota(aviso: AvisoModel) {
    this.avisoDoc = this.db.doc(`Aviso/${aviso.id}`);
    this.avisoDoc.delete();
  }
}
