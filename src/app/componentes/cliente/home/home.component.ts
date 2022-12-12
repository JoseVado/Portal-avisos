import { Component, OnInit } from '@angular/core';
import { AvisoModel } from 'src/app/modelo/aviso.model';
import { AvisoServicio } from 'src/app/servicios/aviso.service';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  avisos: AvisoModel[];

  constructor(
    private fileUploadServicio: FileUploadService,
    private avisoServicio: AvisoServicio
  ) {}

  ngOnInit(): void {
    this.avisoServicio.getAvisos().subscribe((avisos) => {
      this.avisos = avisos;
      //this.fotos();
    });
  }

  fotos() {
    this.avisos.forEach((aviso: AvisoModel) => {
      this.fileUploadServicio
        .getFileOfStorage(aviso.ubicacion_archivo)
        .then((url) => {
          aviso.ubicacion_archivo = url;
        })
        .catch((error) => {
          console.log(error);
          aviso.ubicacion_archivo = '../../../../assets/cargando.png';
        });
    });
  }
}
