import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Timestamp } from 'firebase/firestore';
import { AvisoModel } from 'src/app/modelo/aviso.model';
import { AvisoServicio } from 'src/app/servicios/aviso.service';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';


@Component({
  selector: 'app-subir-modificar-aviso',
  templateUrl: './subir-modificar-aviso.component.html',
  styleUrls: ['./subir-modificar-aviso.component.css'],
})
export class SubirModificarAvisoComponent implements OnInit {
  aviso: AvisoModel = {
    id: '',
    departamento: '',
    descripcion_corta: '',
    descripcion_larga: '',
    responsable: '',
    titulo: '',
    ubicacion_archivo: '',
    fecha: new Timestamp(0, 0),
  };
  hayFoto: string = '';
  id: string;

  @ViewChild('avisoForm') avisoForm: NgForm;

  constructor(
    private router: Router,
    private uploadService: FileUploadService,
    private route: ActivatedRoute,
    private avisoService: AvisoServicio
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.avisoService.getAviso(this.id).subscribe((aviso) => {
        if (aviso) this.aviso = aviso;
      });
    }
  }

  guardar({ value, valid }: { value: any; valid: boolean }) {
    if (!valid) {
      let alertaError = document.getElementById('alertaError');
      setTimeout(function () {
        alertaError!.style.display = 'none';
      }, 4000);
      alertaError!.style.display = 'inline-block';
    } else {
      value.fecha = Timestamp.now();

      if (this.id) { 
        //modificar
        value.id = this.id;
        if (this.archivo && this.aviso.ubicacion_archivo) {
          this.uploadService.deleteOfStorage(this.aviso.ubicacion_archivo);
          value.ubicacion_archivo = this.actualizarFoto(this.archivo);
        }
        this.avisoService.modificarAviso(value);

      } else {
        //agregar
        value.ubicacion_archivo = this.actualizarFoto(this.archivo);
        this.avisoService.agregarAviso(value);
      }
      this.avisoForm.resetForm();
      this.router.navigate(['/tabla-avisos']);
    }
  }

  capturarFile(event: Event) {
    const temp = (<HTMLInputElement>event.target);
    if(temp.files)
      this.archivo = temp.files[0];
  }

  actualizarFoto(file: File) {
    this.uploadService.pushFileToStorage(this.archivo);
    return this.uploadService.basePath + this.archivo.name;
  }

  archivo: File;
}
