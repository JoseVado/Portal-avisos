import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  totalLenght: number;
  page: number = 1;
  items: number = 6;

  constructor(
    private avisoServicio: AvisoServicio,
    private fileUploadServicio: FileUploadService
  ) {}

  ngOnInit(): void {
    this.iniciar();
  }

  iniciar() {
    this.avisoServicio.getAvisos().subscribe((avisos) => {
      this.avisos = avisos;
      this.fotos();
      this.totalLenght = avisos.length;
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
          aviso.ubicacion_archivo = '../../../../assets/cargando.png';
        });
    });
  }

  filtro() {
    var filtro: HTMLElement | any = document.getElementById('filter');
    var selected = filtro.options[filtro.selectedIndex].value;

    this.avisoServicio.setAvisoColeccion(selected, 'desc');
    this.iniciar();
  }
}
