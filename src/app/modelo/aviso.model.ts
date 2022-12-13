import { Timestamp } from 'firebase/firestore';

export interface AvisoModel {
  id?: string;
  descripcion_corta?: string;
  descripcion_larga?: string;
  responsable?: string;
  titulo?: string;
  departamento?: string;
  ubicacion_archivo?: string;
  fecha?: Timestamp;
}
