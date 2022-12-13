import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AvisoModel } from 'src/app/modelo/aviso.model';
import { AvisoServicio } from 'src/app/servicios/aviso.service';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.css'],
})
export class AvisoComponent implements OnInit {
  id: string;
  aviso: AvisoModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fileUploadServicio: FileUploadService,
    private avisoServicio: AvisoServicio
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.avisoServicio.getAviso(this.id).subscribe((aviso) => {
      if (aviso) this.aviso = aviso;
      this.fotos();
    });
  }

  fotos() {
    this.fileUploadServicio
      .getFileOfStorage(this.aviso.ubicacion_archivo)
      .then((url) => {
        this.aviso.ubicacion_archivo = url;
      })
      .catch((error) => {
        this.aviso.ubicacion_archivo = '../../../../assets/cargando.png';
      });
  }
}
