import { Component, OnInit } from '@angular/core';
import { AvisoModel } from 'src/app/modelo/aviso.model';
import { AvisoServicio } from 'src/app/servicios/aviso.service';
import { FileUploadService } from 'src/app/servicios/fileUpload.service';

@Component({
  selector: 'app-tabla-avisos',
  templateUrl: './tabla-avisos.component.html',
  styleUrls: ['./tabla-avisos.component.css'],
})
export class TablaAvisosComponent implements OnInit {
  avisos: AvisoModel[];

  constructor(
    private avisoServicio: AvisoServicio,
    private fileUploadServicio: FileUploadService
  ) {}

  ngOnInit(): void {
    this.avisoServicio.getAvisos().subscribe((avisos) => {
      this.avisos = avisos;
    });
  }

  eliminar(aviso: AvisoModel) {
    if (confirm('¿Seguro que desea eliminar el aviso?')) {
      if (aviso.ubicacion_archivo)
        this.fileUploadServicio.deleteOfStorage(aviso.ubicacion_archivo);
      this.avisoServicio.eliminarAviso(aviso);
    }
  }
}
