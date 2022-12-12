import { Timestamp } from 'firebase/firestore';

export interface LoginModel {
  id?: string;
  usuario?: string;
  fecha_entrada?: Timestamp;
}
